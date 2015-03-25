var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    if (! config.theme) return;

    var distPath = config.dist,
        distThemePath = path.join(distPath, config.theme) + path.sep;

    grunt.config('prettify', {
        options: {
            indent: 4,
            indent_inner_html: false,
            preserve_newlines: true,
            max_preserve_newlines: 1,
            brace_style: "condense",
            unformatted: [ "a", "span", "i", "pre", "code" ]
        },
        all: {
            expand: true,
            cwd: distPath,
            ext: '.html',
            src: ['**/*.html'],
            dest: distPath
        },
        theme: {
            expand: true,
            cwd: distThemePath,
            ext: '.html',
            src: ['**/*.html'],
            dest: distThemePath
        }
    });

    grunt.loadNpmTasks('grunt-prettify');
};