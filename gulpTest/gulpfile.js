//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'); //本地安装gulp所用到的地方
var koa = require('koa');//引用koa框架
var MockServer = require('./server/mockserver');//koa框架服务器模拟文件
var app = koa();//初始化koa

//前端模拟服务器设置
var proxyServerConfig = {
    host: 'http://localhost:82',
    context: '/mytest',
    serverport: 8080
};



//定义一个testLess任务（自定义任务名称）
gulp.task('testBuild', function () {
    gulp.src('src/**/*.css') //该任务针对的文件
        .pipe(gulp.dest('build')); //将会在src/css下生成index.css
});
//koa hello world 测试类
gulp.task('testKoa', function () {
    app.use(function *(){
        this.body = 'Hello World';
    });
    app.listen(3000);
});

//启动koa框架模拟服务器
gulp.task('mock-server', function() {
    proxyServerConfig.app = app;
    var mockServer = new MockServer(proxyServerConfig);
    mockServer.start(proxyServerConfig);
});



gulp.task('default',['mock-server']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径