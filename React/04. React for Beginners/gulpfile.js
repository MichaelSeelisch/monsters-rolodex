var gulp 		 = require('gulp'),
	server 		 = require('gulp-server-livereload'),
	webserver 	 = require('gulp-webserver');

// Webserver for testing
gulp.task('webserver', function() {
	return 	gulp.src('./')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: true
		}));
	});

gulp.task('default', ['webserver']);