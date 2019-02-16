var gulp = require("gulp");
var sass = require("gulp-sass");
var minCss = require('gulp-clean-css');
var uglify = require("gulp-uglify");
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

//编译sass压缩css
gulp.task("sass", function() {
        return gulp.src('./src/scss/*.scss')
            .pipe(sass())
            .pipe(minCss())
            .pipe(gulp.dest("./src/css"))
    })
    //压缩js  合并js文件
gulp.task("uglify", function() {
        return gulp.src('./src/js/*.js')
            .pipe(uglify())
            .pipe(concat('all.js'))
            .pipe(gulp.dest("./dist/js"))
    })
    //起服务
gulp.task('webserver', function() {
        return gulp.src("src")
            .pipe(webserver({
                port: 9090,
                open: true,
                livereload: true,
            }))
    })
    //创建build任务
gulp.task('bulidcss', function() {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./bulid/css'))
})
gulp.task('bulidjs', function() {
        return gulp.src('./src/js/*.js')
            .pipe(gulp.dest('./bulid/js'))
    })
    //监听事件
gulp.task('watch', function() {
        return gulp.watch(["./src/scss/*.scss", "'./src/js/*.js'"], gulp.series('sass', 'uglify'))

    })
    //默认任务
gulp.task('default', gulp.series('uglify', 'sass', 'watch'))