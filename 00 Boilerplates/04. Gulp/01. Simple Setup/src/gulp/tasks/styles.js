'use strict';

const config = require('../config');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('styles', function(cb) {
  return gulp.src(config.paths.styles.entry)
    // Catch Error...
    .pipe(plumber())
    
    // Compile....
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass())

    // Prefix...
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    
    // Shrink...
    .pipe(cssnano())

    // Rename...
    .pipe(rename(config.names.styles))
    
    // Save...
    .pipe(gulp.dest(config.paths.styles.dest))
});

function errorLog(er) {
  console.log('ERROR: ', er);
};