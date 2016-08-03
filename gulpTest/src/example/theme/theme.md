  //去掉鼠标移到连接上以后出现的详细信息
   .navbar-brand:hover {
    text-decoration: none
    }

    //鼠标覆盖以后变色
    .navbar-brand:hover {
        color: #fff;
        background-color: transparent;
    }
    //固定在window顶部
    .navbar-fixed-top {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1030;
    }

    .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
    }

    position 属性值的含义：
    static
    元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。
    relative
    元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。
    absolute
    元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
    fixed
    元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。

    aria-haspopup :true表示点击的时候会出现菜单或是浮动元素； false表示没有pop-up效果。
    aria-expanded:表示展开状态。默认为undefined, 表示当前展开状态未知。其它可选值：true表示元素是展开的；false表示元素不是展开的。