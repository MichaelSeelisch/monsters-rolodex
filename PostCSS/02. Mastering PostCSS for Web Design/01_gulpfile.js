var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    cssvariables = require('postcss-css-variables')

// Autoprefix
gulp.task('styles', function() {
  return gulp.src('src/01_example.css')
      .pipe(postcss([
        autoprefixer,
        cssvariables(/* options */)
      ]))
      .pipe(gulp.dest('dest/'));
});

// Linting
gulp.task('lint-styles', ['styles'], function() {
  return gulp.src('src/01_example.css')
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
  return gulp.src('dest/01_example.css')
      .pipe(postcss([
        cssnano
      ]))
      .pipe(rename('01_example.min.css'))
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('maps/'))
      .pipe(gulp.dest('dest/'));
});

// Watch
var watcher = gulp.watch('src/*css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['lint-styles', 'styles', 'rename']);
