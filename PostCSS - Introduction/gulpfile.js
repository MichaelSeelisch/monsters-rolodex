var gulp = require('gulp');
var postcss = require('gulp-postcss');
var server = require('gulp-server-livereload');
/*
	var csswring = require('csswring');
*/
var cssnext = require('gulp-cssnext');
var autoprefixer = require('autoprefixer');
var lost = require('lost');

gulp.task('styles', function() {
	var processors = [
		// csswring,
		lost,
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
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      defaultFile: 'index.html'
    }));
});

gulp.task('watch:styles', function() {
	gulp.watch('**/*.css', ['styles']);
});

gulp.task('default', ['webserver', 'watch:styles']);

