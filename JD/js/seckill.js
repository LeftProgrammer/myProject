
var J_sk_list_wrapper = document.getElementById("J_sk_list_wrapper");
var J_sk_list = document.getElementById("J_sk_list");
var J_sk_controls = document.getElementById("J_sk_controls");
var later = document.getElementById("sk_controls_next");
var before = document.getElementById("sk_controls_prev");

//点击前后按钮切换图片
J_sk_list_wrapper.onmouseover = function(){
    J_sk_controls.style.display = "block";
};
J_sk_list_wrapper.onmouseout = function(){
    J_sk_controls.style.display = "none";
};
later.onclick = function(){
    later_pic();
};
before.onclick = function(){
    before_pic();
};
// function later_pic(){
//     var newPlace;
//     if(J_sk_list.style.left == "-3000px"){
//         newPlace = -1000;
//     }else {
//         newPlace = parseInt(J_sk_list.style.left) - 1000;
//     }
//     J_sk_list.style.left = newPlace + "px";
// }
// function before_pic(){
//     var newPlace;
//     if(J_sk_list.style.left == "0px"){
//         newPlace = -2000;
//     }else{
//         newPlace = parseInt(J_sk_list.style.left) + 1000;
//     }
//     J_sk_list.style.left = newPlace + "px";
// }
var animated = false;
function move(offset){
    animated = true;
    var time = 1000;
    var inteval = 10;
    var speed = offset/(time/inteval);
    var left = parseInt(J_sk_list.style.left) + offset;
    var amimate = function(){
        if((speed > 0 && parseInt(J_sk_list.style.left) < left) || (speed < 0 && parseInt(J_sk_list.style.left) > left)){
            J_sk_list.style.left = parseInt(J_sk_list.style.left) + speed + "px";
            setTimeout(amimate,inteval);
        }else{
            J_sk_list.style.left = left + "px";
            if(parseInt(left) > -1000){
                J_sk_list.style.left = -2000+ "px";
                return;
            }
            if(parseInt(left) < -2000){
                J_sk_list.style.left = -1000 + "px";
                return;
            }
            animated = false;
        }
    };
    amimate();
}

function later_pic(){
    if(animated){
        return;
    }
    move(-1000);
}
function before_pic(){
    if(animated){
        return;
    }
    move(1000);
}



//sk_special两张图片实现自动切换显示
//找出要控制的元素
var J_sk_special = document.getElementById("J_sk_special");
var J_sk_special_list = document.getElementById("J_sk_special_list");
var J_sk_special_item1 = document.getElementById("J_sk_special_item1");
var J_sk_special_pic1 = document.getElementById("J_sk_special_pic1");
var J_sk_special_item2 = document.getElementById("J_sk_special_item2");
var J_sk_special_pic2 = document.getElementById("J_sk_special_pic2");
var J_sk_special_inditem1 = document.getElementById("J_sk_special_inditem1");
var J_sk_special_inditem2 = document.getElementById("J_sk_special_inditem2");

//给小圆点绑定鼠标移动事件
    J_sk_special_inditem1.onmouseover = function(){
        //鼠标移上去时，小圆点显示红色
        J_sk_special_inditem1.className = "sk_special_inditem active";
        J_sk_special_inditem2.className = "sk_special_inditem";
        //小圆点显示红色时，显示对应图片
        J_sk_special_item1.className = "sk_special_item active";
        J_sk_special_item2.className = "sk_special_item";
    };

    J_sk_special_inditem2.onmouseover = function(){
        J_sk_special_inditem2.className = "sk_special_inditem active";
        J_sk_special_inditem1.className = "sk_special_inditem";
        J_sk_special_item2.className = "sk_special_item active";
        J_sk_special_item1.className = "sk_special_item";
    };

//创建图片切换事件
    function change(){
        if(J_sk_special_inditem1.className == "sk_special_inditem active"){
            J_sk_special_inditem2.className = "sk_special_inditem";
            //小圆点显示红色时，显示对应图片
            J_sk_special_item1.className = "sk_special_item active";
            J_sk_special_item2.className = "sk_special_item";
        }
}


//增加定时功能，让图片自动循环切换
var timing = null;
function skPlay() {
    timing = setInterval(function () {
        change();
    }, 3000);
}
skPlay();


//让图片自动进行循环播放，使用setInterval()
// var timer = null;
// function autoPlay() {
//     timer = setInterval(function () {
//         next_pic();
//     }, 3000);
// }
// autoPlay();


//鼠标移动到图片上,图片移动,字体变色效果
var J_sk_item_pic_1k = document.getElementById("J_sk_item_pic_1k");
var J_sk_item_img = document.getElementById("J_sk_item_img");
var J_sk_item_name = document.getElementById("J_sk_item_name");

J_sk_item_pic_1k.onmouseover = function(){
    J_sk_item_name.style.color = "#f10215";
    J_sk_item_img.style.margin = "0 0 34px";
};
J_sk_item_pic_1k.onmouseout = function(){
    J_sk_item_name.style.color = "#999";
    J_sk_item_img.style.margin = "17px 0";
    // J_sk_item_img.style.transition = "transform .3s ease, -webkit-transform 3.3s ease";
};

/*
    倒计时功能
 */
//定义一个函数
function countTime(){
    //获取当前时间
    var date = new Date();
    var now = date.getTime();

    //设置截止时间
    var endDate = new Date("2018-10-14 23:23:23");
    var end = endDate.getTime();

    //时间差
    var leftTime = end - now;

    //定义变量好h、m、s保存倒计时时间
    var h,m,s;
    if(leftTime >= 0){
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        s = Math.floor(leftTime/1000%60);
    }
    //将倒计时赋值给相应元素
    document.getElementById("t-h").innerHTML = h;
    document.getElementById("t-m").innerHTML = m;
    document.getElementById("t-s").innerHTML = s;

}
//递归每秒调用countTime方法，显示动态时间效果
setInterval(countTime, 1000);