const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const less = require("gulp-less");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const series = require("run-sequence").use(gulp);
const path = require("path");
const ora = require("ora");

module.exports = function(output) {
  // 编译less
  const spinner = ora("compiling less").start();
  gulp.task("g", function() {
    gulp
      .src("./green.less")
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie > 9"]
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("green.css"))
      .pipe(gulp.dest(output))
      .on("err", err => spinner.failed(err))
      .on("end", () => spinner.succeed());
  });

  gulp.task("r", function() {
    gulp
      .src("./red.less")
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie > 9"]
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("red.css"))
      .pipe(gulp.dest(output))
      .on("err", err => spinner.failed(err))
      .on("end", () => spinner.succeed());
  });

  gulp.task("y", function() {
    gulp
      .src("./orange.less")
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie > 9"]
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("orange.css"))
      .pipe(gulp.dest(output))
      .on("err", err => spinner.failed(err))
      .on("end", () => spinner.succeed());
  });

  gulp.task("y2", function() {
    gulp
      .src("./orange2.less")
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie > 9"]
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("orange2.css"))
      .pipe(gulp.dest(output))
      .on("err", err => spinner.failed(err))
      .on("end", () => spinner.succeed());
  });
  gulp.task("b", function() {
    gulp
      .src("./blue.less")
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie > 9"]
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("blue.css"))
      .pipe(gulp.dest(output))
      .on("err", err => spinner.failed(err))
      .on("end", () => spinner.succeed());
  });
  // // 拷贝字体文件
  // const spinner2 = ora('copying fonts').start()
  // gulp.task('fonts', function() {
  //   gulp.src('./common/iconfont/fonts/*.*')
  //     .pipe(gulp.dest(path.resolve(output, './fonts')))
  //     .on('err', err => spinner.failed(err))
  //     .on('end', () => spinner2.succeed())
  // })

  series("g", "r", "y", "b");
};
