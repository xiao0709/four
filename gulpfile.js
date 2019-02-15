var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('dev', function() {
    return gulp.src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('default', function() {
    return gulp.watch('./src/scss/index.scss', gulp.series('dev'))
})