/* browserifyBundleLogger
 ------------
 Provides grunt style logs to the bundle method in tasks/browserify.js
 */

var grunt = require('grunt');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
    start: function (filepath) {
        startTime = process.hrtime();
        grunt.log.ok('Bundling ' + filepath);
    },

    end: function (filepath) {
        var taskTime = process.hrtime(startTime);
        var prettyTime = prettyHrtime(taskTime);
        grunt.log.ok('Bundled ' + filepath + ' in ' + prettyTime);
    }
};