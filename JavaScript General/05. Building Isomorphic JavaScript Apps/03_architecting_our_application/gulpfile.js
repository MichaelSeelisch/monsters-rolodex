var gulp = require('gulp'),
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon'),
    sequence = require('run-sequence');

var fileToCompile = 'example_6_7';

gulp.task('start', function () {
  nodemon({
    watch: 'dist',
    script: 'dist/' + fileToCompile + '.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('compile', function () {
  return gulp.src('src/' + fileToCompile + '.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('copy', function () {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/' + fileToCompile + '.js', ['compile']);
  gulp.watch('src/**/*.html', ['copy']);
});

gulp.task('default', function (callback) {
  sequence(['compile', 'watch', 'copy'], 'start', callback)
});
