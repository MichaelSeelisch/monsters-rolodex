var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    cssvariables = require('postcss-css-variables')
    cssmixins = require('postcss-mixins'),
    calc = require('postcss-calc');

// Autoprefix
gulp.task('styles', function() {
  return gulp.src('src/03_example.css')
      .pipe(postcss([
        autoprefixer,
        cssvariables(/* options */),
        cssmixins(/* options */),
        calc(/* options */)
      ]))
      .pipe(gulp.dest('dest/'));
});

// Watch
var watcher = gulp.watch('src/*css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['styles']);
