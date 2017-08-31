const config = require('../config');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');

gulp.task('images', function(cb) {
  return gulp.src(config.paths.images.entry)
    // Catch Error...
    .pipe(plumber())
    
    // Optimize...
    .pipe(imagemin())
		.on('error', errorLog)
    
    // Save...
    .pipe(gulp.dest(config.paths.images.dest))
});

function errorLog(er) {
  console.log('ERROR: ', er);
};