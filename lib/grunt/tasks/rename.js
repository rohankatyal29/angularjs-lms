var config = require('../config');

module.exports = function (grunt) {

    if (config.rename.length) {
        config.rename.forEach(function (task) {
            if ((typeof task.themes == 'undefined' || task.themes.indexOf(config.theme) !== - 1) && (typeof task.exclude == 'undefined' || task.exclude.indexOf(config.theme) === - 1)) {

                var files = [];
                task.files.forEach(function (file) {
                    files.push({
                        src: file.src.ReplaceSpecialPaths(config),
                        dest: file.dest.ReplaceSpecialPaths(config)
                    });
                });
                grunt.config([ 'rename', task.name ], {
                    files: files
                });
            }
        });
    }

    grunt.loadNpmTasks('grunt-contrib-rename');
};