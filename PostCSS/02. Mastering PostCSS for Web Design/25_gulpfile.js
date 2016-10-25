'use strict';

var gulp = require('gulp'),
    postcss = require('postcss'),
    safe = require('postcss-safe-parser'),
    autoprefixer = require('autoprefixer'),
    fs = require('fs');

var exampleFileName = '25_example';

var badCss = 'a {';

gulp.task('default', function () {
  return postcss([autoprefixer])
    .process(badCss, { parser: safe })
    .then(function (result) {
      console.log(result.css); //= 'a {}'
      fs.writeFileSync('dest/css/' + exampleFileName + '.css', result.css);
    });
});
