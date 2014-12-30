module.exports = function(grunt){
    grunt.initConfig({
        'uglify': {
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

        'jshint': {
            options: {
                jshintrc: '.jshintrc'
            },
            target: {
                src: 'src/*.js'
            }
        },

        'concat': {
            options:{
                seperator: ';',
                banner: '/* Lin Dong 2014 */\n'
            },
            target: {
                src: ['src/application.js', 'src/util.js'],
                dest: 'dist/application.js'
            }
        },

        'watch': {
            scripts: {
                files: ['src/*.js'],
                tasks: ['jshint']
            }
        },

        'coffee': {
            options: {
                bare: true,
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
        }


    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('restart', ['watch']);
};
