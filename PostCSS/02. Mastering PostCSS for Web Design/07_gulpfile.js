var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    customMedia = require('postcss-custom-media');

var exampleFileName = '07_example';

// Media queries
gulp.task('style', function() {
  return gulp.src('src/' + exampleFileName + '.css')
      .pipe(postcss([
        customMedia()
      ]))
      .pipe(gulp.dest('dest/'));
});

var watcher = gulp.watch('src/' + exampleFileName + '.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' running tasks...');
});

gulp.task('default', ['style']);
