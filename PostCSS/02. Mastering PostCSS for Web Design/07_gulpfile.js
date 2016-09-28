var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    customMedia = require('postcss-custom-media');

// Media queries
gulp.task('style', function() {
  return gulp.src('src/07_example.css')
      .pipe(postcss([
        customMedia()
      ]))
      .pipe(gulp.dest('dest/'));
});

var watcher = gulp.watch('src/07_example.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' running tasks...');
});

gulp.task('default', ['style']);
