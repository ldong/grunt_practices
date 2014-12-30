module.exports = function(grunt){
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: 'dist/application.map',
                banner: '/* Lin Dong 2014 */\n'
            },

            target: {
                src: 'dist/application.js',
                dest: 'dist/application.min.js'
            },

            util: {
                src: 'src/util.js',
                dest: 'dist/util.min.js'
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            target: {
                src: 'src/*.js'
            }
        },

        concat: {
            options:{
                seperator: ';',
                banner: '/* Lin Dong 2014 */\n'
            },
            target: {
                src: ['src/application.js', 'src/util.js'],
                dest: 'dist/application.js'
            }
        },

        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['jshint']
            }
        },

        coffee: {
            options: {
                bare: false,
                join: false,
                seperator: ';'
            },
            target: {
                expand: true,
                // current working directory
                cwd: 'src/',
                src: '*.coffee',
                dest: 'lib/',
                ext: '.js'
            }
        },

        nodeunit: {
            target: {
                src: 'test/*_test.js'
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('default', ['coffee', 'jshint', 'concat', 'uglify']);
    grunt.registerTask('start', ['watch']);
};
