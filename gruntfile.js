'use strict'

var _ = require("lodash");

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            output: ['ToBeCleaned/*']
        },
        log: {
            target1: 'hello',
            target2: [1, 2, 3]
        },
        opt: {
            options: { opt1: 1 }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");

    // grunt.registerTask("default", ['clean']);
    grunt.registerTask('default', 'My "default" task description.', function() {
        grunt.log.writeln('Currently running the "default" task.');
        grunt.task.run('foo', 'bar');
    });

    grunt.registerTask('foo', 'foo task', function() {
        grunt.log.writeln('running foo task...');
    });

    grunt.registerTask('bar', 'bar task', function() {
        grunt.log.writeln('running bar task...');
    });

    grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function () {
        // Force task into async mode and grab a handle to the "done" function.
        var done = this.async();
        // Run some sync stuff.
        grunt.log.writeln('Processing task...');
        // And some async stuff.
        setTimeout(function () {
            grunt.log.writeln('All done!');
            done();
        }, 1000);
    });

    // grunt lodash:3
    grunt.registerTask('lodash', 'lodash task', function (nfold) {
        var a = [1, 2, 3];
        var multiple = _.map(a, function (n) {return n * (nfold || 2)});
        grunt.log.writeln(this.name + " multiple", a, multiple);
    });

    // grunt log
    // grunt log:target1
    // grunt log:target2
    grunt.registerMultiTask('log', 'multi log task', function () {
        grunt.log.writeln(this.target + ": " + this.data);
    });

    // grunt params:1:2:3
    grunt.registerTask('params', 'multi param task', function (p1, p2, p3) {
        grunt.log.writeln(p1, p2, p3);
    });

    // grunt env
    grunt.registerTask('env', 'access environment', function () {
        grunt.log.writeln(JSON.stringify(process.env));
    });

    // grunt env
    grunt.registerTask('opt', 'optional param processing', function () {
        var options = this.options ({
            opt1: '0'
        });
        grunt.log.writeln("optional flag", options.opt1);
    });
};