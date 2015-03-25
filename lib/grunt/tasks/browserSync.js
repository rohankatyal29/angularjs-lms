var config = require('../config');
var browserSync = require('browser-sync');
var path = require('path');

module.exports = function (grunt) {

    var startPath = config.dist + (config.dist !== '' ? '/' : '' ) + ( config.theme != 'choose' ? config.theme : '' ) + '/index.html';

    grunt.config('browserSyncInit', {
        dist: {
            options: {
                server: {
                    baseDir: './'
                },
                startPath: startPath
            }
        },
        options: {
            online: false,
            notify: false,
            minify: false,
            injectChanges: false
        }
    });

    /**
     * Init BrowserSync manually
     */
    grunt.registerMultiTask("browserSyncInit", "Keep your browsers in sync", function () {
        var done = this.async();
        browserSync.init([
            path.join(config.dist, config.theme, '**', 'css', '*.css'),
            path.join(config.dist, config.theme, '**', 'js', '*.js'),
        ], this.options());
        done();
    });

    /**
     * Reload page
     */
    grunt.registerTask("browserSyncReload", function () {
        browserSync.reload();
    });
};