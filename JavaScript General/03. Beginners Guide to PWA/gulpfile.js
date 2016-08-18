var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    uglify      	= require ('gulp-uglify'),
    concat 	      = require('gulp-concat'),
    cssnano       = require('gulp-cssnano'),
    uncss         = require('gulp-uncss'),
    autoprefixer  = require('gulp-autoprefixer'),
    browserSync   = require('browser-sync').create();

gulp.task('styles', function() {
	return gulp.src('./css/*.css')
          .pipe(plumber({
            errorHandler: onError
          }))
          .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
          }))
          .pipe(uncss({
            html: ['index.html'],
            ignore: ['']
          }))
          .pipe(concat('style.min.css'))
          .pipe(cssnano())
          .pipe(gulp.dest('./css/build/'));
});

gulp.task('scripts_vendor', ['styles'], function() {
	return gulp.src('./js/vendor/*.js')
          .pipe(plumber({
            errorHandler: onError
          }))
      		.pipe(concat('vendor.min.js'))
      		.pipe(uglify())
      		.pipe(gulp.dest('./js/build/'));
});

gulp.task('scripts_custom', ['scripts_vendor'], function() {
	return gulp.src(['./js/page.js', './js/arrivals.js', './js/main.js'])
          .pipe(plumber({
            errorHandler: onError
          }))
      		.pipe(concat('script.min.js'))
      		.pipe(uglify())
      		.pipe(gulp.dest('./js/build/'));
});

gulp.task('browser-sync', ['scripts_custom'], function() {
  browserSync.init({
    server: {
      baseDir: './',
      directory: false,
      index: "index.html"
    }
  });
});

function onError(err) {
  var err = (err !== undefined) ? err : 'Unknown ERROR!';
  console.log(err);
}

gulp.task('default', ['styles', 'scripts_vendor', 'scripts_custom', 'browser-sync']);
