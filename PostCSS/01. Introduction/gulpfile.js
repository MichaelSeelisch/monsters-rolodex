var gulp = require('gulp');
var postcss = require('gulp-postcss');
var server = require('gulp-server-livereload');
var webserver = require('gulp-webserver');
/*
	var csswring = require('csswring');
*/
var cssnext = require('gulp-cssnext');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var rucksack = require('rucksack-css');

gulp.task('styles', function() {
	var processors = [
		// csswring,
		lost,
        rucksack,
		autoprefixer({browsers:['last 2 version']})
	];

  return gulp.src('styles.css')
  	.pipe(postcss(processors))
  	.pipe(cssnext({
	        compress: false
	 }))
  	.pipe(gulp.dest('./dest'))
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      defaultFile: 'index.html'
    }));
});

gulp.task('watch:styles', function() {
	gulp.watch('**/*.css', ['styles']);
});

//gulp.task('default', ['webserver', 'watch:styles']);
gulp.task('default', ['watch:styles', 'webserver']);
