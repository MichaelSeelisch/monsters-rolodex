let gulp = require('gulp');
let svgSprite = require('gulp-svg-sprite');

let config = {
    shape: {
        dest: './dist/images/assets',
    },
    mode: {
        css: {
            dest: '.',
            prefix: '.icon-',
            dimensions: true,
            sprite: './dist/images/spritesheet.svg',
            spritePath: 'http://www.google.de',
            bust: true,
            render: {
				scss: {
                    dest: './src/sass'
                }
			}
		}
	}
};

gulp.task('default', function() {
 return gulp.src('./src/images/**/*.svg')
	.pipe(svgSprite(config))
    .pipe(gulp.dest('.'))
});
    