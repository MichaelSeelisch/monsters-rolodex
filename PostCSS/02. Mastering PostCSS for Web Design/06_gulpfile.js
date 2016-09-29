var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    bem = require('postcss-bem'),
    bemLinter = require('postcss-bem-linter'),
    reporter = require('postcss-reporter');

var exampleFileName = '06_example';

// Check consistency with BEM standards
gulp.task('lint', ['bem'], function() {
  return gulp.src('dest/' + exampleFileName + '.css')
      .pipe(postcss([
        bemLinter({
          preset: 'bem'
        }),
        reporter({
          clearMessages: true
        })
      ]))
      .pipe(gulp.dest('dest/'));
});

// Compile BEM
gulp.task('bem', function() {
  return gulp.src('src/' + exampleFileName + '.css')
      .pipe(postcss([
        bem({
          style: 'bem',
          separators: {
            descendent: '__'
          }
        })
      ]))
      .pipe(gulp.dest('dest/'));
})

var watcher = gulp.watch('src/' + exampleFileName + '.css', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' running tasks...');
});

gulp.task('default', ['bem', 'lint']);
