module.exports = function (grunt) {
    grunt.initConfig({

        // Watch task config
        watch: {
            sass: {
                files: 'src/scss/*.scss',
                tasks: ['sass']
            }
        },

        // SASS task config
        sass: {
            dev: {
                files: {
                    // destination         // source file
                    'bin/css/main.css' : 'src/scss/main.scss'
                }
            }
        },

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        'bin/css/*.css',
                        'bin/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './bin'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
  };