'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Watch files for changes & reload
gulp.task('serve', function() {
  browserSync({
    port: 5000,
    notify: false,
    logPrefix: 'PSK',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    server: {
      baseDir: ['.tmp', './']
    }
  });

  gulp.watch(['./**/*.html', '!./bower_components/**/*.html'], reload);
  gulp.watch(['./css/**/*.css'], reload);
  gulp.watch(['./js/**/*.js'], reload);
  gulp.watch(['./img/**/*'], reload);
});

gulp.task('serve:dist', function() {
  browserSync({
    port: 5001,
    notify: false,
    logPrefix: 'PSK',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    }
  });
});
