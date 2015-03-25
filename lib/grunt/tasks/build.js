var config = require('../config');

module.exports = function (grunt) {
    var build = {
        dist: {
            tasks: [
                'clean:dist',
                'swig:dist',
                'concurrent:build-dist-1',
                'autoprefixer:theme',
                'concurrent:build-dist-2',
                'copy-build',
                'less:components',
                'copy:css_components',
                'autoprefixer:css_components'
            ]
        },
        dist_sass: {
            tasks: [
                'clean:dist',
                'swig:dist',
                'concurrent:build-dist-sass',
                'autoprefixer:theme',
                'concurrent:build-dist-2',
                'copy-build'
            ]
        },
        modules_less: {
            tasks: [
                'clean:modules',
                'parallelize:less:modules',
                'autoprefixer:modules',
                'parallelize:cssmin:modules'
            ]
        },
        modules_js: {
            tasks: [
                'jshint:all',
                'concurrent:build-modules-js-1',
                'concurrent:build-modules-js-2'
            ]
        },
        modules_sass: {
            tasks: [
                'clean:modules',
                'parallelize:sass:modules',
                'autoprefixer:modules',
                'parallelize:cssmin:modules'
            ]
        },
        skins: {
            tasks: [
                'clean:skins',
                'parallelize:less:skins',
                'autoprefixer:skins',
                'parallelize:cssmin:skins'
            ]
        },
        skins_sass: {
            tasks: [
                'clean:skins',
                'parallelize:sass:skins',
                'autoprefixer:skins',
                'parallelize:cssmin:skins'
            ]
        },
        d: {
            tasks: [
                'setWatch',
                'build:dist'
            ]
        },
        dsass: {
            tasks: [
                'setWatch',
                'build:dist_sass'
            ]
        },
        dm: {
            tasks: [
                'clean:dist',
                'swig:dist',
                'concurrent:build-dm-1',
                'autoprefixer:theme',
                'concurrent:build-dist-2',
                'copy-build',
                'concurrent:build-dm'
            ]
        },
        dmsass: {
            tasks: [
                'concurrent:build-dmsass'
            ]
        },
        dms: {
            tasks: [ 'concurrent:build-dms' ]
        },
        dmssass: {
            tasks: [ 'concurrent:build-dmssass' ]
        },
        choose: {
            tasks: [
                'build:d',
                'rename'
            ]
        }
    };

    if (! config.minify) {
        var exclude = [ 'cssmin', 'uglify' ];
        for (var b in build) {
            for (var i = 0; i < build[ b ].tasks.length; i++) {
                exclude.forEach(function (e) {
                    if (build[ b ].tasks[ i ].indexOf(e) !== -1) {
                        build[ b ].tasks.splice(i, 1);
                        i--;
                    }
                });
            }
        }
    }

    grunt.config('build', build);

    grunt.registerMultiTask('build', function () {
        var async = this.async();
        grunt.task.run(this.data.tasks);
        async();
    });
};