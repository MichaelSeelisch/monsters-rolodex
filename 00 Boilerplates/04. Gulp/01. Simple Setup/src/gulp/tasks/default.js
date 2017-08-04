'use strict';

const config = require('../config');

const gulp = require('gulp');

gulp.task('watch', function(cb) {
  gulp.watch(config.paths.styles.all, ['styles']);
  gulp.watch(config.paths.scripts.all, ['scripts']);
  gulp.watch(config.paths.images.all, ['images']);
});

gulp.task('default', ['styles', 'scripts', 'images', 'analyze', 'server', 'watch']);