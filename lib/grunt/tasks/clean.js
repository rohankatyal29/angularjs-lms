var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    var sass_exclude_path = path.join(process.cwd(), '.ruby-sass-converter', 'exclude.json'),
        sass_src = [
            'src/scss/**/*.scss',
            'lib/**/*.scss'
        ];

    try {
        var sass_exclude_data = grunt.file.readJSON(sass_exclude_path);
        sass_exclude_data.forEach(function(file, i){
            sass_exclude_data[i] = "!" + file.replace(/less/g, 'scss');
        });
        sass_src = sass_src.concat(sass_exclude_data);
    } catch (err) { }

    grunt.config('clean', {
        options: {
            force: true
        },
        html: {
            src: [ config.dist + '/' + config.theme + '/**/*.html', '!' + config.dist + '/' + config.theme + '/components/**/*.html' ]
        },
        dist: {
            src: [ config.dist + '/' + config.theme + '/**/*' ]
        },
        modules: {
            src: [ config.dist + '/' + config.theme + '/css/module-*.css' ]
        },
        skins: {
            src: [ config.dist + '/' + config.theme + '/css/skin-*.css' ]
        },
        sass: {
            src: sass_src
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};