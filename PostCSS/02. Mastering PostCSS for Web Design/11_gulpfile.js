var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    sprites = require('postcss-sprites');

var exampleFileName = '11_example';

var opts = {
    stylesheetPath: 'dest/',
    spritePath    : './img/11',
    path          : 'src/img/_11/'
};

gulp.task('style', function() {
  return gulp.src('src/' + exampleFileName + '.css')
      .pipe(postcss([
        sprites(opts)
      ]))
      .pipe(gulp.dest('dest/'));
});

gulp.task('lint-styles', ['style'], function() {
    return gulp.src('dest/' + exampleFileName + '.css')
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
	return gulp.src('dest/' + exampleFileName + '.css')
    .pipe(postcss([ cssnano() ]))
		.pipe(rename(exampleFileName + '.min.css'))
		.pipe(gulp.dest('dest/'));
});

gulp.task('sourcemap', ['rename'], function () {
	return gulp.src('dest/' + exampleFileName + '.css')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('maps/'))
		.pipe(gulp.dest('dest/'));
});

var watcher = gulp.watch('src/' + exampleFileName + '.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' running tasks...');
});

gulp.task('default', ['lint-styles', 'style', 'rename', 'sourcemap']);
