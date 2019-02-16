var gulp = require("gulp");
var sass = require("gulp-sass");
var minCss = require('gulp-clean-css');
var uglify = require("gulp-uglify");

//编译sass压缩css
gulp.task("sass", function() {
        return gulp.src('./src/scss/*.scss')
            .pipe(sass())
            .pipe(minCss())
            .pipe(gulp.dest("./src/css"))
    })
    //压缩js
gulp.task("uglify", function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
})