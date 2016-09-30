var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    constants = require('postcss-constants'),
    plumber = require('gulp-plumber');

var exampleFileName = '02_example';

gulp.task('styles', function() {
  return gulp.src('src/css/' + exampleFileName + '.css')
      .pipe(plumber())
      .pipe(postcss([
        constants
      ]))
      .pipe(gulp.dest('dest/css/'));
});

gulp.task('default', ['styles']);
