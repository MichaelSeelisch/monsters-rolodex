var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    calc = require('postcss-calc'),
    nesting = require('postcss-nesting');

var exampleFileName = '05_example';

gulp.task('styles', function() {
  return gulp.src('src/' + exampleFileName + '.css')
      .pipe(postcss([
        autoprefixer,
        nesting({
          /* options */
        }),
      ]))
      .pipe(gulp.dest('dest/'));
});

// Linting
gulp.task('lint-styles', ['styles'], function() {
  return gulp.src('dest/' + exampleFileName + '.css')
      .pipe(postcss([
        stylelint({
          'rules': {
            'color-no-invalid-hex': true,
            'declaration-colon-space-before': 'never',
            'indentation': 2,
            'number-leading-zero': 'always'
          }
        }),
        reporter({
          clearMessages: true
        })
      ]))
});

// Shrink an rename
gulp.task('rename', ['lint-styles'], function() {
  return gulp.src('dest/' + exampleFileName + '.css')
      .pipe(postcss([
        cssnano
      ]))
      .pipe(rename(exampleFileName + 'min.css'))
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('maps/'))
      .pipe(gulp.dest('dest/'));
});

// Watch
var watcher = gulp.watch('src/' + exampleFileName + '.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['styles', 'lint-styles', 'rename']);
