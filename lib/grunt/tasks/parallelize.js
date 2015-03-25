var config = require('../config');

module.exports = function (grunt) {
    grunt.config('parallelize', {
        options: {
            processes: config.cpu
        },
        uglify: true,
        less: true,
        sass: true,
        cssmin: true,
        autoprefixer: true,
        prettify: true
    });
    grunt.loadNpmTasks('grunt-parallelize');
};