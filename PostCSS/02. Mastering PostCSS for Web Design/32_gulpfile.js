'use strict';

var gulp     = require('gulp'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    nano = require('gulp-cssnano'),
    pleeease = require('gulp-pleeease'),
    sourcemaps = require('gulp-sourcemaps'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter');

var exampleFileName = '32_example';

var pleeeaseOptions = {
    optimizers: { minifier: true }
};

var stylerules = {
  "color-no-invalid-hex": 2,
  "declaration-colon-space-before": [2, "never"],
  "indentation": [2, 2],
  "number-leading-zero": [2, "always"]
};

var renameFunction = function (path) {
  path.extname = ".min.css";
  return path;
};

var sourceMapLocation = ['dest/css/'+ exampleFileName + '.css', '!dest/css/' + exampleFileName + '.min.css'];

gulp.task('styles', function () {
  return gulp.src('src/css/' + exampleFileName + '.css')
    .pipe(pleeease(pleeeaseOptions))
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('lint', ['styles'], function() {
  return gulp.src('src/css/' + exampleFileName + '.css')
    .pipe(postcss([
      stylelint({
        "rules": stylerules
      }),
    reporter({
      clearMessages: true
    })
  ]))
});

gulp.task('rename', ['lint'], function () {
  return gulp.src('src/css/' + exampleFileName + '.css')
    .pipe(rename(renameFunction))
    .pipe(gulp.dest("dest/css/"));
});


gulp.task('minifyCSS', ['sourcemap'], function () {
  return gulp.src('src/css/' + exampleFileName + '.min.css')
    /*
      .pipe(nano({ autoprefixer: false }))
    */
    .pipe(gulp.dest("dest/css/"));
});

gulp.task('sourcemap', ['rename'], function () {
  return gulp.src(sourceMapLocation)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('maps/', {
      sourceMappingURLPrefix: 'https://www.mydomain.com/'
    }))
    .pipe(gulp.dest("dest/css"));
});

var watcher = gulp.watch('src/css/' + exampleFileName + '.css', ['styles', 'lint' , 'rename' , 'minifyCSS', 'sourcemap']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['styles', 'lint' , 'rename' , 'minifyCSS', 'sourcemap']);
