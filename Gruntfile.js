module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nameStr: grunt.template.process('My name is <%= name %>', {
            data: {
                name: 'Lin'
            }
        }),

        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: 'dist/application.map',
                banner: '/* <%= pkg.author %> | <%= pkg.license %> '
                // + "| <%= grunt.template.date(new Date(100), 'mm/dd/yyyy')%> */"
                + "| <%= grunt.template.today('mm/dd/yyyy')%> by <%= nameStr%>*/"
                + '\n'
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
                banner: '/* <% pkg.author %> | <% pkg.license %> */\n'
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
            target:'test/*_test.js'
        },

        clean: {
            target:  ['dist', 'lib']
        },

        multi: {
            target: {
                name: 'Lin',
                age: 23
            },
            other: {
                arr: [1,2,3],
                bool: false
            }
        },

        fnList: {
            target: {
                src: 'src/*.js'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadTasks('/Users/ldong/temp/project/tasks');

    grunt.registerTask('default', ['coffee', 'jshint', 'concat', 'uglify']);
    grunt.registerTask('reboot', ['clean', 'default']);
    grunt.registerTask('start', 'Watching all JS files', ['watch']);

    grunt.registerTask('tutorial', 'this is an example task', function(){
        if(+new Date() % 2 ==0){
            console.log('even time');
        } else {
            console.log('odd time');
        }
    });

    grunt.registerTask('withArgs', function(one, two){
        var str = this.name + ': ';
        str += one+' ' || ' one, ';
        str += two || ' two, ';
        console.log(str);
    });

    grunt.registerMultiTask('multi', function(){
        console.log(this.target);
        console.log(this.data);
    });
};
