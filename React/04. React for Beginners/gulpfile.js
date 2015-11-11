var gulp 		 = require('gulp'),
	server 		 = require('gulp-server-livereload'),
	webserver 	 = require('gulp-webserver');

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

// Watch Task
gulp.task('watch', function() {
	gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['watch', 'webserver']);