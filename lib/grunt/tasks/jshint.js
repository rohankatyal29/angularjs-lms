module.exports = function (grunt) {
    grunt.config('jshint', {
        all: ['Gruntfile.js', 'src/js/**/*.js', 'lib/**/*.js', '!lib/grunt/**/*.js']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};