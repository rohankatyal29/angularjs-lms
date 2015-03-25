var config = require('../config');
var path = require('path');

module.exports = function (grunt) {

    var batch = function (key) {
        for (var build in config.parallel) {
            if (build.indexOf(key) !== - 1) {
                var tasks = [];
                config.parallel[ build ].tasks.forEach(function (task, index) {
                    if (index > 0 && index % 2 == 0 || (index + 1) == config.parallel[ build ].tasks.length) {
                        // config here
                        grunt.config([ 'parallel', key + index ], {
                            options: config.parallel[ build ].options,
                            tasks: tasks
                        });
                        // reset
                        tasks = [];
                    }
                    tasks.push(task);
                });
            }
        }
    };

    var getTasks = function (key) {
        var tasks = [ 'setCPU:1' ],
            parallel = grunt.config('parallel');
        for (var build in parallel) {
            if (build.indexOf(key) !== - 1) {
                tasks.push('parallel:' + build);
            }
        }
        return tasks;
    };

    grunt.registerTask('setParallelCPU', function (limit) {
        var parallel = grunt.config('parallel');
        for (var build in parallel) {
            for (var index = 0; index < parallel[ build ].tasks.length; index ++) {
                parallel[ build ].tasks[ index ].args.push('setCPU:' + limit);
            }
        }
        grunt.config('parallel', parallel);
    });

    Object.keys(config.parallel).forEach(function (build) {
        batch(build);
        grunt.registerTask(build, function () {
            var async = this.async();
            grunt.task.run(getTasks(build));
            async();
        });
    });

    grunt.loadNpmTasks('grunt-parallel');

};