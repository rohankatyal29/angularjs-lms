var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    if (! config.theme) return;

    var destPath = path.join(config.dist, config.theme, 'css'),
        cwdThemesPath = path.join('src', 'less', 'themes', config.theme) + path.sep;

    grunt.config([ 'less', 'theme' ], {
        expand: true,
        cwd: cwdThemesPath,
        src: [ '*.less', '!_*.less', '!module-*.less' ],
        dest: destPath,
        ext: '.css'
    });
    grunt.config([ 'less', 'components' ], {
        expand: true,
        src: [ path.join('src', 'html', 'themes', config.theme, 'components', '**/*.less') ],
        ext: '.css'
    });
    grunt.config([ 'less', 'modules' ], {
        expand: true,
        cwd: cwdThemesPath,
        src: [ 'module-*.less' ],
        dest: destPath,
        ext: '.css'
    });
    grunt.config([ 'less', 'skins' ], {
        expand: true,
        cwd: path.join('src', 'less', 'skins', config.theme),
        src: '*.less',
        dest: destPath,
        ext: '.css'
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};