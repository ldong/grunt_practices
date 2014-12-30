# Notes

Author: Lin Dong

Date: Tue Dec 30 11:38:31 EST 2014

Notes I took with *Getting Good With Grunt*

## Node Package Manager

Lets talk about npm

``` bash
npm init

// store dependencies in package.json
npm install PACKAGE --save

// store dependencies in package.json only for development use
npm install PACKAGE --save-dev

```

## Install grunt

```
npm install -g grunt-cli
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
```

## GruntFile

Create a grunt **template** file

```
npm install grunt-init -g --save-dev
```

Setup project, i.e. jQuery

```
mkdir ~/.grunt-init
git clone https://github.com/gruntjs/grunt-init-jquery.git ~/.grunt-init/jquery
```

Init a jQuery project, `grunt-init jquery`

## Install dependencies

1. Install bower if you have not done that yet, `npm install bower -g`
2. `npm install && bower install`

## Fresh Start

```
npm init
npm install grunt --save-dev
npm install grunt-contrib-uglify --save-dev
```

See my Gruntfile.js as example

```
vim Gruntfile.js
```

## Plugins

```
npm install grunt-contrib-uglify
npm install grunt-contrib-jshint
npm install grunt-contrib-concat
npm install grunt-contrib-watch
npm install grunt-contrib-coffee
npm install grunt-contrib-nodeunit
npm install grunt-contrib-clean
```

## RegisterTasks

[Creating Tasks](http://gruntjs.com/creating-tasks)
```
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
```

## Grunt options

``` bash
// boolean targets
grunt options --target
grunt options --no-target

// assign values
grunt options --target=dev
grunt options --target=prod
```

## Grunt util

See in this [repo](https://github.com/ldong/grunt_api_practices)

[Grunt util](http://gruntjs.com/api/grunt.util)

[Grunt.event](http://gruntjs.com/api/grunt.event)

## Templates

Using [templates](http://gruntjs.com/api/grunt.template) to read from file and use in the config

``` javascript
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/* <%= pkg.author %> | <%= pkg.license %> */\n'

    ... more code ...
});
```

Make into templates

``` javascript
nameStr: grunt.template.process('My name is <%= name %>', {
    data: {
        name: 'Lin'
    }
}),
```

## Build your own template

See [repo](https://github.com/ldong/grunt_init_template)

## Build your own plugin

`git clone https://github.com/gruntjs/grunt-init-gruntplugin.git ~/.grunt-init/gruntplugin`

see [repo](https://github.com/ldong/grunt_init_mygruntplugin)

# Hint

If you run into issue like **EACCES** on MAC, please try the following to fix it

`sudo chown -R $(whoami) ~/.npm`

If you run into jshint warnings, just run 'grunt COMMAND --force'

# Reference

[Getting good with Grunt - Andrew Burgess]
(https://code.tutsplus.com/courses/getting-good-with-grunt)

[Grunt target expand]
(http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically)

[Happy Coding Using Grunt – Blake Haswell]
(http://blakehaswell.com/post/42407766402/happy-coding-using-grunt)
