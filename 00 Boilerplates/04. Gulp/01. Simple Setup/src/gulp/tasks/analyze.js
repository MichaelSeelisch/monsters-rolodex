'use strict';

const config = require('../config');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const checkCSS = require( 'gulp-check-unused-css' );

gulp.task('analyze', function(cb) {
  return gulp.src([config.paths.styles.dest + '/**/*.css', config.paths.pages.dest])
     // Catch Error...
    .pipe(plumber())
    
    // Remove unused classes and styles...
    .pipe(checkCSS(
      {
        ignore: [ 'later-used-class', /^custom-/ ]
        /* globals: [ 'bootstrap@3.2.0' ] */
      }
    ))
});