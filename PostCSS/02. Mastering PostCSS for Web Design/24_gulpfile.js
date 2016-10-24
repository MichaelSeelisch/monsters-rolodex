'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    nested = require('postcss-nested'),
    csstyle = require('csstyle');

var exampleFileName = '24_example';

gulp.task('style', function () {
	return gulp.src('src/css/' + exampleFileName + '.css')
		.pipe(postcss([
      nested,
      csstyle
    ]))
		.pipe(gulp.dest('dest/css/'));
});

var watcher = gulp.watch('src/css/' + exampleFileName + '.css', ['style']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['style']);
