var config = require('../config');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/browserifyBundleLogger');
var source = require('vinyl-source-stream');
var fs = require('vinyl-fs');
var path = require('path');

module.exports = function (grunt) {

    if (! config.theme) return;

    var options = {
        bundles: [
            {
                src: './src/js/themes/' + config.theme + '/main.js',
                dest: path.join(config.dist, config.theme, 'js'),
                bundleName: 'module-bundle-main.js'
            }
        ]
    };

    grunt.config('browserify', {options: options});

    grunt.registerTask('browserify-modules', function () {
        config.browserify.forEach(function (task) {
            if ((typeof task.themes == 'undefined' || task.themes.indexOf(config.theme) !== - 1) && (typeof task.exclude == 'undefined' || task.exclude.indexOf(config.theme) === - 1)) {
                var dest = path.join(config.dist, config.theme, 'js'),
                    src = task.cwd + task.src;

                options.bundles.push({
                    src: src,
                    dest: dest,
                    bundleName: task.build
                });
            }
        });

        grunt.config('browserify', {options: options});
        grunt.task.run('browserify');

    });

    grunt.registerTask('browserify', 'Browserify lets you require("modules") in the browser by bundling up all of your dependencies.', function () {

        var options = this.options();

        if (grunt.file.exists('./src/js/themes/' + config.theme + '/theme-core.js')) {
            options.bundles.push({
                src: './src/js/themes/' + config.theme + '/theme-core.js',
                dest: path.join(config.dist, config.theme, 'js'),
                bundleName: 'theme-core.js'
            });
        }

        var bundleQueue = options.bundles.length;

        var async = this.async();

        var browserifyThis = function (bundleConfig) {

            var bundler = browserify({
                // Required watchify args
                cache: {}, packageCache: {}, fullPaths: true,
                // Specify the entry point of your app
                entries: bundleConfig.src,
                // Enable source maps!
                debug: global.debug
            });

            var reportFinished = function () {
                // Log when bundling completes
                bundleLogger.end(path.join(bundleConfig.dest, bundleConfig.bundleName));

                if (bundleQueue) {
                    bundleQueue --;
                    if (bundleQueue === 0) {
                        async();
                    }
                }
                else {
                    async();
                }
            };

            var bundle = function () {
                // Log when bundling starts
                bundleLogger.start(path.join(bundleConfig.dest, bundleConfig.bundleName));

                return bundler
                    .bundle()
                    // Report compile errors
                    // .on('error', handleErrors)
                    .pipe(source(bundleConfig.bundleName))
                    // Specify the output destination
                    .pipe(fs.dest(bundleConfig.dest))
                    //.pipe(complete())
                    .on('end', reportFinished);
            };

            if (global.isWatching) {
                // Wrap with watchify and rebundle on changes
                bundler = watchify(bundler);
                // Rebundle on update
                bundler.on('update', bundle);
            }

            return bundle();
        };

        // Start bundling with Browserify for each bundle specified
        options.bundles.forEach(function (config) {
            browserifyThis(config);
        });
    });
};