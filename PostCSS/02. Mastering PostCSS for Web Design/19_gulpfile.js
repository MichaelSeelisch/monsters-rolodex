var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    transition = require('postcss-transition-shortcut');

var exampleFileName = '19_example';

var processors = [ transition() ];

gulp.task('default', function () {
	return gulp.src('src/css/' + exampleFileName + '.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('dest/css/'));
});
