'use strict';

const config = require('../config');

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server', function(cb) {
  browserSync.init({
    server: {
      baseDir: '../bin'
    },
    // Watch files....
    files: [
      '../bin/**/*'
    ]
  });
});

function errorLog(er) {
  console.log('ERROR: ', er);
};