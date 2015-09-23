var gulp = require('gulp');
var jspm = require('jspm');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        files: "./src/**.*",
        server: {
            baseDir: "./src",
            directory: false,
            index: "index.html"
        }
    });
});

gulp.task('jspm:bundle', function() {
    jspm.bundle([
        './src/js/startup', 
        './src/app/app'
       	].join(' + '), 
        './src/js/bundle.js',
        { 
            minify: true,
            inject: true
        }).then(function() {}
    );
});

gulp.task('default', ['browser-sync', 'jspm:bundle']);