module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/js/*.js',
                dest: 'dest/js/script.min.js'
            },
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'src/js/*.js',
                dest: 'dest/js/script.min.js'
            }
        },
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify:dev']
            },
            css: {
                files: ['src/sass/*.scss'],
                tasks: ['sass:dev']
            },
            sass: {
                files: ['src/sass/*.sass'],
                tasks: ['sass']
            },
            html: {
                options: {livereload: true},
                files: ['index.html']

            },
            livereload: {
                options: {livereload: true},
                files: ['dest/**/*', 'src/**/*']
            }
        },
        sass:{
            dev:{
                options: {
                    style: 'expanded',
                    loadPath: require('node-neat').includePaths
                },
                files: {
                    'dest/css/style.css' : 'src/sass/style.scss'
                }
            },
            build: {
                options:{
                    style: 'compressed',
                    loadPath: require('node-neat').includePaths
                },
                files: {
                    'dest/css/style.css' : 'src/sass/style.scss'
                }
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-uncss');
    // Default task(s).
    grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
    grunt.registerTask('build', ['uglify:build', 'sass:build']);
};