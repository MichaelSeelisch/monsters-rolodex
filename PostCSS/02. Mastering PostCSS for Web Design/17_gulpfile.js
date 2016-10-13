var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    neat = require('postcss-neat');

var exampleFileName = '17_example';

gulp.task('style', function() {
  return gulp.src('src/css/' + exampleFileName + '.css')
      .pipe(postcss([
        autoprefixer({
          browsers: ['last 4 versions'],
          cascade: false
        }),
        neat({
          /* options */
        })
      ]))
      .pipe(gulp.dest('dest/css/'));
});

gulp.task('lint-styles', ['style'], function() {
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

var watcher = gulp.watch('src/css/' + exampleFileName + '.css', ['default', 'style', 'lint-styles', 'rename', 'sourcemap']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['style', 'lint-styles', 'rename', 'sourcemap']);
