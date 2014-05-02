var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        'gitbook': {
            development: {
                input: "./",
                github: "ledsun/c_sharp_kata_book"
            }
        },
        'gh-pages': {
            options: {
                base: '_book',
                user: {
                  name: 'shigeru.nakajima',
                  email: 'shigeru.nakajima@gmail.com'
                }
            },
            src: ['**']
        },
        'clean': {
            files: '.grunt'
        }
    });

    grunt.registerTask('publish', [
        'gitbook',
        'gh-pages',
        'clean'
    ]);
    grunt.registerTask('default', 'gitbook');
};
