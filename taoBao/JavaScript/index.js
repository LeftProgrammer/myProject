/*

 */


/*
    content/main-right/tbh-notice---选项卡
 */
/*原生JS方法*/
window.onload = function () {
    //1.找到要控制的元素
    var noticeHd = document.getElementById("J-noticeHd");
    var oLis = noticeHd.getElementsByTagName("li");
    var noticeBd = document.getElementById("J-boticeBd");
    var oUls = noticeBd.getElementsByTagName("ul");

    //2.遍历oLis
    for (var i = 0; i < oLis.length; i++) {
        //让oLis的下标和oUls相同
        oLis[i].index = i;
        //3.给oLis绑定鼠标移动事件
        oLis[i].onmouseover = function () {
            for (var j = 0; j < oUls.length; j++) {
                //4.清楚所有oLis样式，将所有oUls隐藏
                oLis[j].className = "";
                oUls[j].style.display = "none";
            }
            //5.给当前oLis添加样式，让当前oUls显示
            this.className = "selected";
            oUls[this.index].style.display = "block";
        };
    }
};

/*jQuery方法*/
// $(function(){
//     //1.找到要控制的元素
//     var oLis = $(".notice-hd li");
//     var oUls = $(".notice-bd ul");
//     oLis.mouseover(function(){
//         $(this).addClass("selected")                //设置当前oLis的样式
//             .siblings().removeClass("selected");    //清除其他oLis的样式
//         oUls.css("display","none");                 //让所有oUls全部隐藏
//         var index = $(this).index();                //获取当前oLis元素的索引
//         oUls.eq(index).css("display","block");      //让与当前oLis相同索引下的oUls显示
//     });
// });


/*
    向下滚动页面，搜索栏置顶显示效果
    原理：window.onscroll。当onscroll事件发生时，用js获得页面的scrollTop值，判断scrollTop为一个设定值时，显示指定页面
 */
/*原生JS方法*/
//命名滚动事件
window.onscroll = function () {
    //定义页面的scrollTop值
    var t = document.documentElement.scrollTop || document.body.scrollTop;

    var jSearchTop = document.getElementById("jSearchTop");

    //对t的值进行判断
    if (t >= 170) {
        jSearchTop.className = "search-top-wrap clearfix search-fix"
    } else {
        jSearchTop.className = "search-top-wrap clearfix";
    }
};

/*
    tbh-promo ===> 轮播图
    原理：通过改变left的值来切换图片
*/
/*原生JS写法*/
//1.找要控制的元素
var jPromoBd = document.getElementById("jPromoBd");
var jPromoBdMain = document.getElementById("jPromoBdMain");
var jPromoDiv = jPromoBdMain.getElementsByTagName("div");
var jPromoNavList = document.getElementById("jPromoNavList");
var jPromoList = jPromoNavList.getElementsByTagName("a");
var jBtnPrev = document.getElementById("jBtnPrev");
var jBtnNext = document.getElementById("jBtnNext");
//2.定义前后按钮点击事件
jBtnNext.onclick = function () {
    BtnNext();
};
jBtnPrev.onclick = function () {
    BtnPrev();
};
//3.点击按钮时改变left值，达到切换图片的效果
var index = 0;
function BtnNext() {
    index++;
    if (index > 4) {
        index = 0;
    }
    showJPromoList();
    var newLeft;
    if (jPromoBdMain.style.left == "-3120px") {
        newLeft = -1040;
    } else {
        newLeft = parseInt(jPromoBdMain.style.left) - 520;
    }
    jPromoBdMain.style.left = newLeft + "px";
}
function BtnPrev() {
    index--;
    if (index < 0) {
        index = 4;
    }
    showJPromoList();
    var newLeft;
    if (jPromoBdMain.style.left == "0px") {
        newLeft = -2080;
    } else {
        newLeft = parseInt(jPromoBdMain.style.left) + 520;
    }
    jPromoBdMain.style.left = newLeft + "px";
}
//4.给小圆点设置样式，显示当前图示时，对应的小圆点显示相应样式
function showJPromoList() {
    for (var i = 0; i < jPromoList.length; i++) {
        jPromoList[i].className = "";
    }
    jPromoList[index].className = "on";
}

//5.点击小圆点时，显示相应的图片
for (var i = 0; i < jPromoList.length; i++) {
    (function (i) {
        jPromoList[i].onmousemove = function () {
            var dis = index - i;
            if (index == 4 && parseInt(jPromoBdMain.style.left) !== -2600) {
                dis = dis - 5;
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if (index == 0 && parseInt(jPromoBdMain.style.left) !== -520) {
                dis = 5 + dis;
            }
            jPromoBdMain.style.left = (parseInt(jPromoBdMain.style.left) + dis * 520) + "px";
            index = i;
            showJPromoList();
        }
    })(i);
}
//6.让图片自动轮播
var t = null;
function promoPlay() {
    t = setInterval(function () {
        BtnNext();
    }, 3000);
}
promoPlay();
//7.设置观察某张图片时，停止自动轮播，离开后再次轮播
jPromoBd.onmouseenter = function () {
    clearInterval(t);
};
jPromoBd.onmouseleave = function () {
    promoPlay();
};
//8.设置用小圆点上选择指定图片时，停止自动轮播，离开后再次轮播
jPromoNavList.onmouseenter = function () {
    clearInterval(t);
};
jPromoNavList.onmouseleave = function () {
    promoPlay();
};
//9.设置使用前后按钮时，停止自动轮播，离开后再次轮播
jBtnPrev.onmouseenter = function () {
    clearInterval(t);
};
jBtnPrev.onmouseleave = function () {
    promoPlay();
};
jBtnNext.onmouseenter = function () {
    clearInterval(t);
};
jBtnNext.onmouseleave = function () {
    promoPlay();
};


/*
    tbh-tmall ===> 轮播图
    原理：通过opacity属性控制图片显示和隐藏
*/
/*原生JS写法*/
//1.获取需要控制的元素
var jTmallBd = document.getElementById("jTmallBd");
var jTmallBdInner = document.getElementById("jTmallBdInner");
var oItem = jTmallBdInner.getElementsByTagName("div");
var jTmallInnerLine = document.getElementById("jTmallInnerLine");
var jLine = document.getElementById("jLine");
var jOptPrev = document.getElementById("jOptPrev");
var jOptNext = document.getElementById("jOptNext");
var num = document.getElementById("num");
var place = 0;
//2.定义前后按钮点击事件
jOptPrev.onclick = function(){
    OptPrev()
};
 function OptPrev(){
    place--;
    for(var i = 0;i < oItem.length;i++){
        oItem[i].className = "tmall-item";
        if(place < 0){
            place = 5;
        }
    }
     num.innerHTML = parseInt(place + 1);
    jLine.style.left = place*87 + "px";
    oItem[place].className = "tmall-item  active";
}
jOptNext.onclick = function(){
    OptNext()
};
function OptNext(){
    place++;
    for(var i = 0;i < oItem.length;i++){
        oItem[i].className = "tmall-item";
        if(place > 5){
            place = 0;
        }
    }
    num.innerHTML = parseInt(place + 1);
    jLine.style.left = place*87 + "px";
    oItem[place].className = "tmall-item  active";
}
//3.添加自动定时执行函数
var tbhTime = null;
function TmallPlay() {
    tbhTime = setInterval(function () {
        OptNext();
    }, 3000);
}
TmallPlay();

//7.设置观察某张图片时，停止自动轮播，离开后再次轮播
jTmallInnerLine.onmouseenter = function () {
    clearInterval(tbhTime);
};
jTmallInnerLine.onmouseleave = function () {
    TmallPlay();
};
jOptPrev.onmouseenter = function () {
    clearInterval(tbhTime);
};
jOptPrev.onmouseleave = function () {
    TmallPlay();
};
jOptNext.onmouseenter = function () {
    clearInterval(tbhTime);
};
jOptNext.onmouseleave = function () {
    TmallPlay();
};
/*
    main-botton ===> 内容循环显示效果
 */
/*原生JS写法*/
// 1.找到要控制的元素
var jHeadline = document.getElementById("jHeadline");
var oDivs = jHeadline.getElementsByTagName("div");
var number = 0;
//2.定义一个函数，依次显示下一个内容
var nextContent = function () {
    number++;        //记录步数
    if (number > 2) {
        number = 0;
        jHeadline.style.top = 0 + "px"
    } else {
        jHeadline.style.top = -number * 73 + "px";
    }
};
//3.定义自动循环函数，让nextContent（）定时循环执行
var timer = null;
function autoPlay() {
    timer = setInterval(function () {
        nextContent();
    }, 3000);
}
autoPlay();
//4.设置鼠标事件控制自动循环函数停止或执行
jHeadline.onmouseover = function () {
    clearInterval(timer);
};
jHeadline.onmouseout = function () {
    autoPlay();
};