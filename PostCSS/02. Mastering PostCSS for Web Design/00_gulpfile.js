var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter');

// Autoprefix
gulp.task('styles', function() {
  return gulp.src('src/00_example.css')
      .pipe(postcss([
        autoprefixer
      ]))
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('maps/'))
      .pipe(gulp.dest('dest/'));
});

// Shrink an rename
gulp.task('rename', ['styles'], function() {
  return gulp.src('dest/00_example.css')
      .pipe(postcss([
        cssnano
      ]))
      .pipe(rename('00_example.min.css'))
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('maps/'))
      .pipe(gulp.dest('dest/'));
});

// Linting
gulp.task('lint-styles', function() {
  return gulp.src('src/00_example.css')
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

// Watch
var watcher = gulp.watch('src/*css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['lint-styles', 'styles', 'rename']);
