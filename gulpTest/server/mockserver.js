/**
 * Created by zhukai on 2016/7/26.
 */
var serve = require('koa-static');//koa框架维护静态资源
var mount = require('koa-mount');//将koa应用作为中间件挂载（实现url不同的context拦截）
var koa = require('koa');//koa框架引入
var path = require('path');//用来拼接路径
var Router = require('koa-router');

module.exports = function(options){
    var app = options.app;
    var host = options.host;
    var context = options.context;
    var port = options.serverport;
    var application=koa();
    return {
        start: function() {
            var router = new Router({
                prefix: context
            });
           application.use(serve(path.join(__dirname, '../src')));//（../src是因为该js文件处于次级目录要回到根目录定位src目录）
            console.log(path.join(__dirname, '../src'));
            app.use(mount(context,application));//挂载koa application在指定的url上
           // app.use(serve(path.join(__dirname, '../src')));
/*            app.use(router.routes())
                .use(router.allowedMethods());*/
            app.listen(port);
            console.log('web服务'+port+'已启动');
        }
    }
}