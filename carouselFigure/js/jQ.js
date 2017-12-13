//1.获取元素
var oBox = $("#box");
var oBoxInner = $("#box-inner");
var oImg = $(".item");
    // console.log(oImg);
var oBtn = $("#btn");
var left = $("#left");
var right = $("#right");
var oNum = $("#num");
var oList = $(".list");
var _index = 0;
var timer = null;
var flag = true;

//2、图片移动的方法
function move(n){        //num：索引
    //获取所有的li--->匹配当前这一个，并给它增加一个class属性--->匹配当前这一个的其他li，并移除它们的一个class属性
    $("#num li").eq(n).addClass("on").siblings().removeClass("on");
    //动画
    oBoxInner.stop().animate({left: -(n+1)*600+"px"},600,function(){
        //判断向前移动到第五张时，下一张瞬间切换为第一张
        if (parseInt(oBoxInner.css("left")) < -3000){
            _index = 0;
            oBoxInner.css("left","-600px");
        }
        flag = true;
    })
}

//3、右键点击切换下一张图片
right.on("click",function(){
    //点击时停止自动轮播
    clearInterval(timer);
    //防止连续点击
    if (flag) {
        test();
        flag = false;
    }
})
function test() {
    move(_index + 1);
    if (_index == 4) {
        _index = 0;
    } else {
        _index++;
    }
    $("#num li").eq(_index).addClass("on").siblings().removeClass("on");
}
//4、左键点击切换到前一张图片
left.on("click",function(){
    clearInterval(timer);
    if(flag){
        flag = false;
        if (_index == 0) {     //判断图片到第一张时，下一张位置切换为第五张
            _index = 4;
            oBoxInner.stop().animate({ left: 0 }, 600, function () {
                oBoxInner.css("left", "-3000px");
                flag = true;
            })
        } else {
            _index--;
            oBoxInner.stop().animate({ left: -(_index+1)*600 + 'px'}, 600, function () {
                if(parseInt(oBoxInner.css("left")) > -600){
                    _index = 4;
                    oBoxInner.css("left","-3000px");
                }
                flag = true;
            })
        }
        $("#num li").eq(_index).addClass("on").siblings().removeClass("on");
        
    }
})

//5、图标切换效果
oList.on("click",function(){
    _index = oList.index($(this));
    move(_index);
})
//6、定时器
timer = setInterval(play, 2000);

//7、实现自动轮播
function play(){
    test();
}
//8、鼠标移动到盒子上时停止自动轮播，离开时开启轮播
oBox.hover(function () {
    clearInterval(timer);
    $("#btn").css("display" , "block");     //让按钮消失
}, function () {
    timer = setInterval(play, 2000);
    $("#btn").css("display" , "none");
})