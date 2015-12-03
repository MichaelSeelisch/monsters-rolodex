var gulp 		= require('gulp'),
	webserver 	= require('gulp-webserver');

// Webserver for testing
gulp.task('webserver', function() {
	return 	gulp.src('./')		
				.pipe(webserver({
					livereload: true,
					directoryListing: false,
					open: true,
					defaultFile: 'index.html'
				}));
});

gulp.task('default', ['watch', 'webserver']);