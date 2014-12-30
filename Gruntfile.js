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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
