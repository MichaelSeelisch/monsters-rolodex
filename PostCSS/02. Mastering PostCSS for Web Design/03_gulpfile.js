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

var exampleFileName = '03_example';

gulp.task('styles', function() {
  return gulp.src('src/css/' + exampleFileName + '.css')
      .pipe(postcss([
        autoprefixer,
        cssvariables(/* options */),
        cssmixins(/* options */),
        calc(/* options */)
      ]))
      .pipe(gulp.dest('dest/css/'));
});

var watcher = gulp.watch('src/css/' + exampleFileName + '.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['styles']);
