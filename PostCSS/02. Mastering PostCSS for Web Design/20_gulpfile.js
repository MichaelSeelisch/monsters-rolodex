var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    customfonts = require('./src/_postcss-custom-fonts');

var exampleFileName = '20_example';

var processors = [
	customfonts({
		fontstacks: {
		  'Extra Stack': '"Extra Stack", "Moar Fonts", Extra, serif',
		  'Arial': 'Arial, "Comic Sans"'
		}
	})
];

gulp.task('default', function () {
	return gulp.src('src/css/' + exampleFileName + '.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('dest/css/'));
});
