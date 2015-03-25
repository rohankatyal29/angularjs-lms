var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    if (! config.theme) return;

    var cssPath = path.join(config.dist, config.theme, 'css') + path.sep;

    grunt.config([ 'cssmin', 'default' ], {
        expand: true,
        cwd: cssPath,
        src: [ '*.css', '!*.min.css' ],
        dest: cssPath,
        ext: '.min.css'
    });

    grunt.config([ 'cssmin', 'vendor' ], {
        expand: true,
        cwd: cssPath,
        src: [ 'vendor.css' ],
        dest: cssPath,
        ext: '.min.css'
    });

    grunt.config([ 'cssmin', 'theme' ], {
        expand: true,
        cwd: cssPath,
        src: [ 'theme-*.css', '!*.min.css' ],
        dest: cssPath,
        ext: '.min.css'
    });

    grunt.config([ 'cssmin', 'modules' ], {
        expand: true,
        cwd: cssPath,
        src: [ 'module-*.css', '!*.min.css' ],
        dest: cssPath,
        ext: '.min.css'
    });

    grunt.config([ 'cssmin', 'skins' ], {
        expand: true,
        cwd: cssPath,
        src: [ 'skin-*.css', '!*.min.css' ],
        dest: cssPath,
        ext: '.min.css'
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};