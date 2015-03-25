var config = require('../config');

module.exports = function (grunt) {

    if (! config.theme) return;

    var watch = {
        less_theme: {
            files: [ 'src/less/themes/' + config.theme + '/**/*.less', 'src/less/common/**/*.less', 'src/less/vendor/**/*.less', 'lib/**/*.less', '!module-*.less' ],
            tasks: [ 'less:theme', 'autoprefixer:theme', 'cssmin:theme', 'browserSyncReload' ]
        },
        less_components: {
            files: [ 'src/html/themes/' + config.theme + '/components/**/*.less' ],
            tasks: [ 'less:components', 'copy:css_components', 'autoprefixer:css_components', 'browserSyncReload' ],
            options: {
                spawn: false
            }
        },
        less_modules: {
            files: [ 'src/less/themes/' + config.theme + '/**/*.less', 'src/less/common/**/*.less', 'src/less/vendor/**/*.less', 'lib/**/*.less' ],
            tasks: [ 'parallelize:less:modules', 'parallelize:autoprefixer:modules', 'parallelize:cssmin:modules', 'browserSyncReload' ]
        },
        less_skins: {
            files: 'src/less/skins/' + config.theme + '/**/*.less',
            tasks: [ 'parallelize:less:skins', 'parallelize:autoprefixer:skins', 'parallelize:cssmin:skins', 'browserSyncReload' ]
        },
        sass_theme: {
            files: [ 'src/scss/themes/' + config.theme + '/**/*.scss', 'src/scss/common/**/*.scss', 'src/scss/vendor/**/*.scss', 'lib/**/*.scss', '!module-*.scss' ],
            tasks: [ 'parallelize:sass:theme', 'autoprefixer:theme', 'cssmin:theme', 'browserSyncReload' ]
        },
        sass_modules: {
            files: [ 'src/scss/themes/' + config.theme + '/**/*.scss', 'src/scss/common/**/*.scss', 'src/scss/vendor/**/*.scss', 'lib/**/*.scss' ],
            tasks: [ 'parallelize:sass:modules', 'parallelize:autoprefixer:modules', 'parallelize:cssmin:modules', 'browserSyncReload' ]
        },
        sass_skins: {
            files: 'src/scss/skins/' + config.theme + '/**/*.scss',
            tasks: [ 'parallelize:sass:skins', 'parallelize:autoprefixer:skins', 'parallelize:cssmin:skins', 'browserSyncReload' ]
        },
        js: {
            files: [ 'src/js/**/*', 'lib/**/*.js' ],
            tasks: [ 'jshint', 'browserify', 'uglify:main' ]
        },
        app: {
            files: [ 'src/html/**/*.html', 'lib/**/*.html' ],
            tasks: [ 'clean:html', 'swig:dist', 'browserSyncReload', 'rename' ],
            options: {
                spawn: false
            }
        },

        // This watcher can achieve much faster syncs than vagrant rsync-auto when using vagrant with rsync synced folders,
        // By using shell:vagrant_rsync task, However it's not recommended unless you know what you're doing.
        vagrant_rsync: {
            files: [ "src/html/**/*.html", "src/less/**/*.less", "src/js/**/*.js" ],
            tasks: [ 'shell:vagrant_rsync' ],
            options: {
                spawn: false
            }
        }
    };

    if (! config.minify) {
        var exclude = [ 'cssmin', 'uglify' ];
        for (var b in watch) {
            for (var i = 0; i < watch[ b ].tasks.length; i ++) {
                exclude.forEach(function (e) {
                    if (typeof watch[ b ].tasks[ i ] !== 'string') {
                        return;
                    }
                    if (watch[ b ].tasks[ i ].indexOf(e) !== - 1) {
                        watch[ b ].tasks.splice(i, 1);
                        i --;
                    }
                });
            }
        }
    }

    grunt.config('watch', watch);

    grunt.registerTask('setWatch', function () {
        global.isWatching = true;
    });

    grunt.registerTask('watch-less', [ 'setWatch', 'browserSyncInit:dist', 'switchwatch:less_theme:less_components:js:app' ]);

    grunt.registerTask('watch-sass', [ 'setWatch', 'browserSyncInit:dist', 'switchwatch:sass_theme:js:app' ]);

    // Run with: grunt switchwatch:target1:target2 to only watch those targets
    grunt.registerTask('switchwatch', function () {
        var targets = Array.prototype.slice.call(arguments, 0);
        Object.keys(grunt.config('watch')).filter(function (target) {
            return ! (grunt.util._.indexOf(targets, target) !== - 1);
        }).forEach(function (target) {
            grunt.log.writeln('Ignoring ' + target + '...');
            grunt.config([ 'watch', target ], {files: []});
        });
        grunt.task.run('watch');
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};