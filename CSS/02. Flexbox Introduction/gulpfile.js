var gulp 		= require('gulp'),
	browserSync = require('browser-sync').create();

// Webserver for testing
gulp.task('browser-sync', function() {
    browserSync.init({
        files: "./**/.*",
        server: {
            baseDir: "./",
            directory: false,
            index: "index.html"
        }
    });
});

// Watch Task
gulp.task('watch', function() {
	gulp.watch('./**/*', browserSync.reload);
});


gulp.task('default', ['watch', 'browser-sync']);