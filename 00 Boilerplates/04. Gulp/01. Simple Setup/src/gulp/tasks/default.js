'use strict';

const config = require('../config');

const gulp = require('gulp');
const util = require('gulp-util');

gulp.task('watch', function () {
  gulp.watch(config.paths.styles.all, ['styles']);
  gulp.watch(config.paths.scripts.all, ['scripts']);
  gulp.watch(config.paths.images.all, ['images']);
});

if(util.env.production) {
  gulp.task('default', ['styles', 'scripts', 'images', 'analyze', 'server', 'watch']);
} else {
  gulp.task('default', ['styles', 'scripts', 'images', 'server', 'watch']);
}
