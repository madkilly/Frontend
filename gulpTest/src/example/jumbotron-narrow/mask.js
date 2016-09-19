/**
 * Created by zhukai on 2016/9/19.
 */
//兼容火狐、IE8
//显示遮罩层
function showMask(){
    $('body').css("overflow","hidden")/*禁止滚动*/
    $("#mask").show();
    $("#show").show();
}
//隐藏遮罩层
function hideMask(){
    $('body').css("overflow","visible")/*禁止滚动*/
    $("#mask").hide();
    $("#show").hide();
}