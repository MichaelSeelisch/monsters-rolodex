var gulp 		= require('gulp'),
	browserSync = require('browser-sync').create(),
	babelify 	= require('babelify'),
	browserify 	= require('browserify'),
	source 		= require('vinyl-source-stream'),
	plumber		= require('gulp-plumber');

// Webserver for testing
gulp.task('browser-sync', function() {
    browserSync.init({
        files: "./build/**.*",
        server: {
            baseDir: "./build",
            directory: false,
            index: "index.html"
        }
    });
});

// Babelify JS
gulp.task('scripts', () => {
	return browserify({
			entries: './src',
			extensions: ['.js'], debug: true
		})
	    .transform('babelify', {
	    	presets: ['es2015', 'react']
	    })
	    .bundle()
	    .pipe(plumber())
	    .pipe(source('index.min.js'))
	    .pipe(gulp.dest('./build'));
});

// Watch Task
gulp.task('watch', function() {
	gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'watch', 'browser-sync']);