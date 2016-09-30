var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter');

var exampleFileName = '00_example';

gulp.task('styles', function() {
  return gulp.src('src/css/' + exampleFileName + '.css')
      .pipe(postcss([
        autoprefixer
      ]))
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('maps/'))
      .pipe(gulp.dest('dest/css/'));
});

gulp.task('rename', ['styles'], function() {
  return gulp.src('dest/css/' + exampleFileName + '.css')
      .pipe(postcss([
        cssnano
      ]))
      .pipe(rename(exampleFileName + '.min.css'))
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('maps/'))
      .pipe(gulp.dest('dest/css/'));
});

gulp.task('lint-styles', function() {
  return gulp.src('src/css/' + exampleFileName + '.css')
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

var watcher = gulp.watch('src/css/' + exampleFileName + '.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['lint-styles', 'styles', 'rename']);
