var gulp 		= require('gulp'),
	webserver 	= require('gulp-webserver'),
	babelify 	= require('babelify'),
	browserify 	= require('browserify'),
	source 		= require('vinyl-source-stream'),

	currentFolder = '02_React_Counter';

// Webserver for testing
gulp.task('webserver', () => {
	return gulp.src('./')
				.pipe(webserver({
					livereload: true,
					directoryListing: true,
					open: './build'
				}));
});

// Babelify JS
gulp.task('scripts', () => {
	return browserify({
			entries: './src/' + currentFolder + '/main.js',
			extensions: ['.js'], debug: true
		})
	    .transform('babelify', {
	    	presets: ['es2015', 'react']
	    })
	    .bundle()
	    .pipe(source('main.min.js'))
	    .pipe(gulp.dest('./build/' + currentFolder));
});

// Copy files
gulp.task('copy', ['scripts'], () => {
    return gulp.src('./src/' + currentFolder + '/index.html')
        		.pipe(gulp.dest('./build/' + currentFolder));
});

// Watch Task
gulp.task('watch', function() {
	gulp.watch('./src/**/*.js', ['scripts']);
	gulp.watch('./src/**/*.html', ['copy']);
});

gulp.task('default', ['scripts', 'copy', 'watch', 'webserver']);