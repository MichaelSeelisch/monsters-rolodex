var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    responsiveimages = require('postcss-responsive-images'),
    at2x = require('postcss-at2x'),
    imagesset = require('postcss-image-set'),
    responsivetype = require('postcss-responsive-type');

// Retina images
gulp.task('style', function() {
  return gulp.src('src/08_example.css')
      .pipe(postcss([
        at2x(),
        responsivetype(),
        imagesset(),
        autoprefixer
      ]))
      .pipe(gulp.dest('dest/'));
});

gulp.task('lint-styles', ['style'], function() {
    return gulp.src('dest/08_example.css')
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
	return gulp.src('dest/08_example.css')
    .pipe(postcss([ cssnano() ]))
		.pipe(rename('08_example.min.css'))
		.pipe(gulp.dest('dest/'));
});

gulp.task('sourcemap', ['rename'], function () {
	return gulp.src('dest/08_example.css')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('maps/'))
		.pipe(gulp.dest('dest/'));
});

var watcher = gulp.watch('src/08_example.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' running tasks...');
});

gulp.task('default', ['lint-styles', 'style', 'rename', 'sourcemap']);
