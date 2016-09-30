var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    evilIcons = require("gulp-evil-icons"),
    postcssSVG = require('postcss-svg');

var exampleFileName = '12_example';

gulp.task('icons', function () {
  return gulp.src('src/html/index_12.html')
    .pipe(evilIcons())
    .pipe(gulp.dest('dest/html/'));
});

gulp.task('changecolor', ['icons'], function() {
  gulp.src('src/css/' + exampleFileName + '.css')
    .pipe(postcss([
      postcssSVG()
    ]))
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('lint-styles', ['changecolor'], function() {
    return gulp.src('dest/css/' + exampleFileName + '.css')
    .pipe(postcss([ stylelint({
        'rules': {
          'color-no-invalid-hex': 2,
          'declaration-colon-space-before': [2, 'never'],
          'indentation': [2, 2],
          'number-leading-zero': [2, 'always']
        }
      }),
      reporter({
        clearMessages: true,
      })
    ]))
});

gulp.task('rename', ['lint-styles'], function () {
	return gulp.src('dest/css/' + exampleFileName + '.css')
    .pipe(postcss([ cssnano() ]))
		.pipe(rename(exampleFileName + '.min.css'))
		.pipe(gulp.dest('dest/css/'));
});

gulp.task('sourcemap', ['rename'], function () {
	return gulp.src('dest/css/' + exampleFileName + '.css')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('maps/'))
		.pipe(gulp.dest('dest/css/'));
});

var watcher = gulp.watch('src/css/' + exampleFileName + '.css', ['default', 'icons', 'changecolor', 'lint-styles', 'rename', 'sourcemap']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['icons', 'changecolor', 'lint-styles', 'rename', 'sourcemap']);
