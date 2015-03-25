var config = require('../config');
var terminal = require('color-terminal');

var log = function (error, stdout, stderr, cb) {
    if (error) {
        terminal.color('red').write(stdout);
    }
    else {
        terminal.color('green').write(stdout);
    }
    cb();
};

module.exports = function (grunt) {
    grunt.config('shell', {
        convert_less_to_sass: {
            command: 'rake convert'
        },
        vagrant_rsync: {
            command:
            'rsync -rvz --archive --delete --itemize-changes -e "ssh -p 2222 ' +
            '-i \'/Users/lazabogdan/.vagrant.d/insecure_private_key\'" ' +
            '--include="**/*.less" --include="**/*.html" --exclude="**/*.css" --exclude="*.hg" --exclude="*.idea" ' +
            '--no-owner --no-group --no-p ' +
            '--rsync-path="sudo rsync" ' +
            '../ ' +
            'vagrant@127.0.0.1:/home/vagrant/social'
        },
        options: {
            callback: log
        }
    });

    grunt.loadNpmTasks('grunt-shell');
};