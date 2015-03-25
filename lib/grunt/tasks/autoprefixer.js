var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    if (! config.theme) return;

    var cssPath = path.join(config.dist, config.theme, 'css') + path.sep;

    grunt.config('autoprefixer', {
        options: {
            browsers: [ 'last 4 versions' ],
            map: global.debug
        }
    });

    grunt.config([ 'autoprefixer', 'theme' ], {
        expand: true,
        cwd: cssPath,
        src: [ 'theme-*.css', '!*.min.css' ],
        dest: cssPath
    });

    grunt.config([ 'autoprefixer', 'css_components' ], {
        expand: true,
        src: [ path.join(config.dist, config.theme, 'components', 'tk-*/**/*.css') ],
        ext: '.css'
    });

    grunt.config([ 'autoprefixer', 'modules' ], {
        expand: true,
        cwd: cssPath,
        src: [ 'module-*.css', '!*.min.css' ],
        dest: cssPath
    });

    grunt.config([ 'autoprefixer', 'skins' ], {
        expand: true,
        cwd: cssPath,
        src: [ 'skin-*.css', '!*.min.css' ],
        dest: cssPath
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
};