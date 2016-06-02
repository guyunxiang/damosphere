const gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./public/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('watch', function() {
  gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('develop', ['sass']);
