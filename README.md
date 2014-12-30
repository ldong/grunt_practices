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

```
vim Gruntfile.js

```

# Hint

If you run into issue like **EACCES** on MAC, please try the following to fix it

`sudo chown -R $(whoami) ~/.npm`


