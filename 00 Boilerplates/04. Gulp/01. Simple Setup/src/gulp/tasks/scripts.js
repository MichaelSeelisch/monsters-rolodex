'use strict';

const config = require('../config');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const uglify = require ('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

gulp.task('scripts', function(cb) {
  return gulp.src(config.paths.scripts.all)
    // Catch Error...
    .pipe(plumber())

    // Lint...
    .pipe(eslint())

    // Clean...
    .pipe(uglify())
		.on('error', errorLog)
    
    // Concat...
    .pipe(concat(config.names.scripts.page))
    
    // Save...
    .pipe(gulp.dest(config.paths.scripts.dest))
});

function errorLog(er) {
  console.log('ERROR: ', er);
};