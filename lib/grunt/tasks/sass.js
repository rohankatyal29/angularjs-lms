var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    if (! config.theme) return;

    var destPath = path.join(config.dist, config.theme, 'css'),
        cwdThemesPath = path.join('src', 'scss', 'themes', config.theme) + path.sep;

    grunt.config('sass', {
        options: {
            loadPath: process.cwd()
        },
        theme: {
            expand: true,
            cwd: cwdThemesPath,
            src: [ '*.scss', '!_*.scss', '!module-*.scss' ],
            dest: destPath,
            ext: '.css'
        },
        modules: {
            expand: true,
            cwd: cwdThemesPath,
            src: [ 'module-*.scss' ],
            dest: destPath,
            ext: '.css'
        },
        skins: {
            expand: true,
            cwd: path.join('src', 'scss', 'skins', config.theme),
            src: '*.scss',
            dest: destPath,
            ext: '.css'
        }
    });

    grunt.registerTask('convert_sass', [ 'shell:convert_less_to_sass', 'clean:sass', 'copy:sass' ]);

    grunt.loadNpmTasks('grunt-contrib-sass');
};