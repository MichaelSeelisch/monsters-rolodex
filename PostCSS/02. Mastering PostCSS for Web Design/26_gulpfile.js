'use strict';

var gulp = require('gulp'),
    postcss = require('postcss'),
    postcss = require('postcss'),
    fs = require('fs'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    syntax = require('postcss-scss');

var exampleFileName = '26_example';

var scss = fs.readFileSync('src/scss/' + exampleFileName + '.scss', 'utf-8');

gulp.task('default', function () {
	postcss([
    autoprefixer,
    nested()
  ])
  .process(scss, {
    syntax: syntax
  })
  .then(function (result) {
	   fs.writeFileSync('dest/css/' + exampleFileName + '.css', result.content);
	});
});
