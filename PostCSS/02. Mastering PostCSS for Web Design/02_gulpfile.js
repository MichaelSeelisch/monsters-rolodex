var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    constants = require('postcss-constants'),
    plumber = require('gulp-plumber');

// Autoprefix
gulp.task('styles', function() {
  return gulp.src('src/02_example.css')
      .pipe(plumber())
      .pipe(postcss([
        constants
      ]))
      .pipe(gulp.dest('dest/'));
});

gulp.task('default', ['styles']);
