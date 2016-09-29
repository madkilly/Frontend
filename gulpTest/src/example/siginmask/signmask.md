bootstrap 模态对话框
实现sign in 对话框
html 14
 <button class="btn btn-primary btn-lg" href="#signup" data-toggle="modal" data-target=".bs-modal-sm">Sign In/Register</button>
 data-toggle="modal" 模态对话框
 data-target=".bs-modal-sm" 将所有bs-modal-sm类的标签显示为模态对话框

html 28
<div class="modal fade bs-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">

class="modal fade bs-modal-sm"  modal 模态插件 fade淡出淡入效果 bs-modal-sm配合14行标定模态对话框内容
tabindex="-1" 属性规定元素的 tab 键控制次序
role="dialog" 无障碍设计的标签
aria-labelledby="mySmallModalLabel" 此时，当焦点落到该输入框时，读屏软件就会读出aria-label里的内容，即“mySmallModalLabel”。 无障碍设计
aria-hidden="true"

html 29
<div class="modal-dialog modal-sm">
模态对话框大小格式

html 30
<div class="modal-content">
模态对话框内容 可以包含 <div class="modal-header">  、<div class="modal-body">  、<div class="modal-footer">

html 32
<div class="bs-example bs-example-tabs">

这两个类要不要都可以

html 33
<ul id="myTab" class="nav nav-tabs">
 <li class="active"><a href="#signin" data-toggle="tab">Sign In</a></li>
nav bootstrap导航条类
nav-tabs 标签模式导航条
<li class="active"><a href="#signin" data-toggle="tab">Sign In</a></li>  导航条内容href="#signin" 转到id为signin的标签页、data-toggle="tab" 显示模式设置为标签页

html 40
<div id="myTabContent" class="tab-content">
class="tab-content" 标签内容类 与下面 tab-pane类配合 生成标签页

<div class="tab-pane fade in" id="why">
class="tab-pane fade in"  tab-pane标签其中的一页 fade 淡出淡入 in 第一个标签页必须添加 .in 类，以便淡入显示初始内容




bootstrap 标签页