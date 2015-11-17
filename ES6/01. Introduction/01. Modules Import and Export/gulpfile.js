var gulp = require('gulp');
    jspm = require('jspm'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            directory: false,
            index: "index.html"
        },
        injectChanges: true
        /*
            browser: ['google chrome', 'firefox', 'safari']
        */
    });
});

gulp.task('jspm:bundle', function() {
    jspm.bundle([
        './src/js/main', 
        './src/js/math/addition'
       	].join(' + '), 
        './src/js/bundle.js',
        { 
            minify: true,
            inject: true
        }).then(function() {}
    );
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*', [
        'jspm:bundle', 
        browserSync.reload
    ]);
});

gulp.task('default', ['browser-sync', 'jspm:bundle', 'watch']);