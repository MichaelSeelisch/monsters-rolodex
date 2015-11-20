var gulp = require('gulp'),
	uglify = require ('gulp-uglify'),
	sass = require('gulp-sass'),
	server = require('gulp-server-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

// WebServer Task
// Starst a local webserver
gulp.task('webserver', function() {
  // gulp.src('app')
	gulp.src('build')
	  	.pipe(server({
	  		defaultFile: 'index.html',
	    	livereload: true,
	      	directoryListing: false, // if true, a list of files in the source folder is shown
	      	open: true
	    }));
});

// Scripts Task
// Uglifies
gulp.task('scripts', function() {
	gulp.src('js/*.js') // Load every js-files from directory 'js'...
		.pipe(uglify())	// ... run the 'uglify'-command / 'uglify' every file
		.on('error', errorLog)
		.pipe(gulp.dest('build/js')) // ... and save the result in an new folder 'build/js'
});

// Styles Task
// Uglifies
gulp.task('styles', function () {
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .on('error', errorLog)
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('build/css/'));
});

// Image Task
// Compress
gulp.task('image', function () {
    gulp.src('img/*')
    	.pipe(imagemin())
    	.pipe(gulp.dest('build/img'));
});

// Watch Task
// Watches JS
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch', 'webserver']);

/*
	gulp.task('default', function() {
		// Default function...
	});
*/