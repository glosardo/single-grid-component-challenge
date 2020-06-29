const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// Compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./assets/**/*.scss')
    // 2. Pass that file through sass compiler
    .pipe(sass())
    // 3. where do i save the compiled CSS?
    .pipe(gulp.dest('./assets/css'))
    // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./assets/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;