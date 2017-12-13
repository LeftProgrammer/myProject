



/*
    轮播图
*/

var list = document.getElementById("J_slider_list");
var prev = document.getElementById("J_slider_control_prev");
var next = document.getElementById("J_slider_control_next");
var index = 0;
//图片向右运动
prev.onclick = function () {
    prev_pic();
};
//图片向左运动
next.onclick = function () {
    next_pic();
};

//给前后按钮绑定点击事件，点击按钮进行循环播放图片

function prev_pic() {
    index--;
    list.style.left = index*790 + "px";
    console.log(index);
    if (index < 0) {
        index = 7;
    }
    showCurrentDot();
    // var newLeft;
    // if (list.style.left === "-790px") {
    //     newLeft = -6320;
    // } else {
    //     newLeft = parseInt(list.style.left) + 790;
    // }
    // list.style.left = newLeft + "px";
}

function next_pic() {
    index++;

    console.log(index);
    if (index > 7) {
        index = 0;
        list.style.left = -7110 + "px";
    }else{
        list.style.left = -(index*790+790) + "px";
    }

    showCurrentDot();
    // var newLeft;
    // if (list.style.left === "-6320px") {
    //     newLeft = -790;
    // } else {
    //     newLeft = parseInt(list.style.left) - 790;
    // }
    // list.style.left = newLeft + "px";
}

//让图片自动进行循环播放，使用setInterval()
var timer = null;
// function autoPlay() {
//     timer = setInterval(function () {
//         next_pic();
//     }, 3000);
// }
// autoPlay();

//小圆点显示与图片对应
//添加showCurrentDot函数
var J_slider_indicator = document.getElementById("J_slider_indicator ");
var dots = J_slider_indicator.getElementsByTagName("i");
//页面刷新时第一个点亮
// dots[0].className = "slider_indicator_btn slider_indicator_btn_on";
function showCurrentDot() {
    for (var j = 0; j < dots.length; j++) {
        dots[j].className = "slider_indicator_btn";
    }
    dots[index].className = "slider_indicator_btn slider_indicator_btn_on";
}

//当鼠标移动到某一张图片上，停止自动播放,用clearInterval;并显示前后按钮
var J_slider_main = document.getElementById("J_slider_main");
J_slider_main.onmouseenter = function () {
    prev.style.display = "block";
    next.style.display = "block";
    clearInterval(timer);
};
J_slider_main.onmouseleave = function () {
    prev.style.display = "none";
    next.style.display = "none";
    // autoPlay();
};



//点击小圆点显示相应的图片
for (var j = 0; j < dots.length; j++) {
    (function (j) {
        dots[j].onmouseover = function () {
            var dis = index - j;
            if (index == 7 && parseInt(list.style.left) !== -6320) {
                dis = dis - 8;
            }
            if (index == 0 && parseInt(list.style.left) !== -790) {
                dis = 8 + dis;
            }
            list.style.left = (parseInt(list.style.left) + dis * 790) + "px";
            index = j;
            showCurrentDot();
        }
    })(j);
}


//促销、公告选项
var J_promotion = document.getElementById("J_promotion");
var J_notice = document.getElementById("J_notice");
var J_news_tab_active = document.getElementById("J_news_tab_active");
var J_mod_tab_content_item1 = document.getElementById("J_mod_tab_content_item1");
var J_mod_tab_content_item2 = document.getElementById("J_mod_tab_content_item2");
J_promotion.onmouseover = function () {
    J_news_tab_active.style.transform = "translateX(0px)";
    J_mod_tab_content_item1.style.display = "block";
    J_mod_tab_content_item2.style.display = "none";
};
J_notice.onmouseover = function () {
    J_news_tab_active.style.transform = "translateX(52px)";
    J_mod_tab_content_item1.style.display = "none";
    J_mod_tab_content_item2.style.display = "block";
};