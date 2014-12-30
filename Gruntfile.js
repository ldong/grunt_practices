module.exports = function(grunt){
    grunt.initConfig({
        'uglify': {
            options: {
                mangle: true,
                compress: true,
                sourceMap: 'dest/application.map',
                banner: '/* Lin Dong 2014 */\n'
            },

            target: {
                src: 'src/application.js',
                dest: 'dest/application.min.js'
            },

            util: {
                src: 'src/util.js',
                dest: 'dest/util.min.js'
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
                dest: 'dest/application.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
