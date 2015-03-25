var config = require('../config');

module.exports = function (grunt) {

    var concurrent = {
        options: {
            logConcurrentOutput: true,
            limit: config.cpu
        },
        "build-dist-1": [
            'parallelize:prettify:theme',
            'parallelize:less:theme',
            'jshint:all',
            'browserify',
            'concat'
        ],
        "build-dist-2": [
            'parallelize:cssmin:vendor',
            'parallelize:cssmin:theme',
            'parallelize:uglify:theme',
            'uglify:main'
        ],
        "build-dist-sass": [
            'parallelize:prettify:theme',
            'parallelize:sass:theme',
            'jshint:all',
            'browserify',
            'concat'
        ],
        "build-dm-1": [
            'parallelize:prettify:theme',
            'parallelize:less:theme',
            'jshint:all',
            'concat'
        ],
        "build-dm": [
            'build:modules_less',
            'build:modules_js'
        ],
        "build-dms": [
            'build:dm',
            'build:skins'
        ],
        "build-dmsass": [
            'build:dist_sass',
            'build:modules_sass',
            'build:modules_js'
        ],
        "build-dmssass": [
            'build:dmsass',
            'build:skins_sass'
        ],
        "build-modules-js-1": [
            'browserify-modules',
            'concat-modules'
        ],
        "build-modules-js-2": [
            'parallelize:uglify:modules',
            'parallelize:uglify:theme'
        ]
    };

    grunt.registerTask('setConcurrentCPU', function (limit) {
        concurrent.options.limit = limit;
        grunt.config('concurrent', concurrent);
    });

    if (! config.minify) {
        var exclude = [ 'cssmin', 'uglify' ];
        for (var key in concurrent) {

            if (Object.prototype.toString.call(concurrent[ key ]) !== '[object Array]') {
                continue;
            }

            for (var i = 0; i < concurrent[ key ].length; i ++) {
                exclude.forEach(function (e) {
                    if (i < 0) return false;
                    if (concurrent[ key ][ i ].indexOf(e) !== - 1) {
                        concurrent[ key ].splice(i, 1);
                        i --;
                    }
                });
            }
        }
    }

    grunt.config('concurrent', concurrent);

    grunt.loadNpmTasks('grunt-concurrent');

};