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
                eqeqeq: true,
                curly: true,
                undef: true,
                unused: true
            },

            target: {
                src: 'src/*.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
