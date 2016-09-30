var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    customMedia = require('postcss-custom-media');

var exampleFileName = '07_example';

// Media queries
gulp.task('style', function() {
  return gulp.src('src/css/' + exampleFileName + '.css')
      .pipe(postcss([
        customMedia()
      ]))
      .pipe(gulp.dest('dest/css/'));
});

var watcher = gulp.watch('src/css/' + exampleFileName + '.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' running tasks...');
});

gulp.task('default', ['style']);
