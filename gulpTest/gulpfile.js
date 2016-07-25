//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'); //本地安装gulp所用到的地方

//定义一个testLess任务（自定义任务名称）
gulp.task('testBuild', function () {
    gulp.src('src/**/*.css') //该任务针对的文件
        .pipe(gulp.dest('build')); //将会在src/css下生成index.css
});

gulp.task('default',['testBuild']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径