var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    if (! config.theme) return;

    var uglifyPath = path.join(config.dist, config.theme, 'js') + path.sep;

    grunt.config([ 'uglify', 'all' ], {
        expand: true,
        cwd: uglifyPath,
        src: [ '*.js', '!*.min.js' ],
        dest: uglifyPath,
        ext: '.min.js'
    });

    grunt.config([ 'uglify', 'theme' ], {
        expand: true,
        cwd: uglifyPath,
        src: [ '*.js', '!*.min.js', '!module-*.js' ],
        dest: uglifyPath,
        ext: '.min.js'
    });

    grunt.config([ 'uglify', 'modules' ], {
        expand: true,
        cwd: uglifyPath,
        src: [ 'module-*.js', '!*.min.js', '!vendor*.js' ],
        dest: uglifyPath,
        ext: '.min.js'
    });

    grunt.config([ 'uglify', 'main' ], {
        expand: true,
        cwd: uglifyPath,
        src: [ 'module-bundle-main.js' ],
        dest: uglifyPath,
        ext: '.min.js'
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};