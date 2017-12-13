//原理：用定位的方式，通过改变父级盒子的left值，来切换图片

// //1、获取需要控制的元素
// var oBox = document.getElementById("box"),
//     oBoxInner = document.getElementById("box-inner"),
//     oImg = oBoxInner.getElementsByClassName("item"),
//     // console.log(oImg);
//     oBtn = document.getElementById("btn"),
//     left = document.getElementById("left"),
//     right = document.getElementById("right"),
//     oNum = document.getElementById("num"),
//     oList = oNum.getElementsByClassName("list");

// //2、给左右按钮绑定点击事件
// // left.onclick = function(){
// //     move(600);
// // };
// // right.onclick = function(){
// //     move(-600);
// // };
// //写移动的方法
// // function move(offset) {           //offdet：要移动的值
// //     var left = parseInt(oBoxInner.style.left) + offset;
// //     oBoxInner.style.left = left + "px";     //改为left的值
// //     //判断图片切换到第一张或者最后一张时该如何做
// //     //到第一张时切换到第五张
// //     if(left > -600){
// //         oBoxInner.style.left = -3000 + "px";
// //         return;
// //     }
// //     //到第五张时切换到第一张
// //     if(left < -3000){
// //         oBoxInner.style.left = -600 + "px";
// //         return;
// //     }
// // }

// //3、点击按钮切换图片时，对应的图标变亮
// var index = 0;          //用来定位是第几个图标
// function showIndex(){
//     for(i = 0;i < oList.length;i++){
//         if(oList[i].className = "list on"){
//             oList[i].className = "list";           //先设置为初始状态
//         }
//     }
//     oList[index].className = "list on";     //后面根据计算来确定哪个图标变亮
// }
// //点击左键时
// left.onclick = function(){
//     move(600);
//     if(index == 0){         //如果图标到第一个，那么下一个就回到最后一个
//         index = 4;
//     }else{
//         index--;        //否则每点击一下就减一
//     }
//     showIndex();    //执行图标变亮函数
// };
// right.onclick = function(){
//     move(-600);
//     if(index == 4){
//         index = 0;
//     }else{
//         index++;
//     }
//     showIndex();
//     // console.log(index);
// };

// // 4、写图标的点击事件
// for(var i = 0;i < oList.length;i++){
//     oList[i].num = i;        //给每个图标添加一个属性,相当于索引，方便定位
//     oList[i].onclick = function(){
//         if(this.className == "list on"){    //如果选中的按钮本身就是变亮状态，则不做任何动作
//             return;
//         }
//         count = this.num;       //做一个计数器
//         var offset = -600*(count-index);        //计算点击的与显示图片之间的偏移量
//         move(offset);
//         index = count;
//         showIndex();
//     };
// }

// //5、添加定时器，实现自动轮播
// var interval = 2000;
// function play(){
//     timer = setInterval(function(){
//         right.onclick();
//     },interval);
// }
// function stop(){
//     clearInterval(timer);       //关闭定时器
// }
// oBox.onmouseover = stop;     //鼠标移到图片上时，停止移动
// oBox.onmouseout = play;      //移出就继续
// play();     //执行函数

// //6、实现动画效果---> 在move函数中添加动画效果
// function move(offset){
//     animated = true;        //用来防止恶意点击动画
//     var time = 1000;        //设置动画的总时间
//     var inteval = 10;       //多久执行一次函数
//     var speed = offset/(time/inteval);      //???
//     var left = parseInt(oBoxInner.style.left) + offset;

//     var animate = function(){
//         if ((speed > 0 && parseInt(oBoxInner.style.left) < left) || (speed < 0 && parseInt(oBoxInner.style.left) > left)){              //判断图片移动的方向
//             oBoxInner.style.left = parseInt(oBoxInner.style.left) + speed + "px";       //慢慢的加实现动画效果
//             setTimeout(animate,inteval);        //递归的方式一次次调用，直到if不成立
//             }else{
//                 oBoxInner.style.left = left + "px";
//                 if(parseInt(left) > -600){
//                     oBoxInner.style.left = -3000 + "px";
//                     return;
//                 }
//                 if(parseInt(left) < -3000){
//                     oBoxInner.style.left = -600 + "px";
//                     return;
//                 }
//             //anmiated，设置成flase这样我们在判断时如果是false便不执行函数，这样我们在运动的时候就可以避免用户一直点击箭头 
//             animated = false;
//         }
//     }
//     animate();
// }


//完整代码
window.onload = function(){
    var oBox = document.getElementById("box"),
        oBoxInner = document.getElementById("box-inner"),
        // oImg = oBoxInner.getElementsByClassName("item"),
        // console.log(oImg);
        oBtn = document.getElementById("btn"),
        left = document.getElementById("left"),
        right = document.getElementById("right"),
        oNum = document.getElementById("num"),
        oList = oNum.getElementsByClassName("list");
    var index = 0;
    var timer;
    var interval = 1000;
    var animated = false;

    //移动方法
    function move(offset){
        animated = true;
        var time = 1000;        //图片移动所需总的时间
        var inteval = 10;       //每隔多久移动一次动画
        var speed = offset/(time/inteval);      //每移动一次的距离
        var left = parseInt(oBoxInner.style.left) + offset;
        
        //动画方法
        var animate = function(){
            if ((speed > 0 && parseInt(oBoxInner.style.left) < left) || (speed < 0 && parseInt(oBoxInner.style.left) > left)){
                oBoxInner.style.left = parseInt(oBoxInner.style.left) + speed + "px";
                setTimeout(animate,inteval);
            }else{
                oBoxInner.style.left = left + "px";
                if(left > -600){
                    oBoxInner.style.left = -3000 + "px";
                }
                if(left < -3000){
                    oBoxInner.style.left = -600 + "px";
                }
                animated = false;       //防止图片移动时恶意操作其他事件
            }
        }
        animate();
    }
    //对应图标显示方法
    function showIndex(){
        for(i = 0;i < oList.length;i++){
            if(oList[i].className == "list on"){
                oList[i].className = "list";
            }
        }
        oList[index].className = "list on";
    }
    //点击左边按钮显示前一张图片
    left.onclick = function () {
        if (animated) {
            return;
        }
        move(600);
        if (index == 0) {
            index = 4;
        } else {
            index--;
        }
        showIndex();
    }
    //点击右边按钮显示下一张图片
    right.onclick = function () {
        if (animated) {
            return;
        }
        move(-600);
        if (index == 4) {
            index = 0;
        } else {
            index++;
        }
        showIndex();
    }
    //点击图标显示对应图片方法
    for (var i = 0; i < oList.length; i++) {
        oList[i].num = i;
        oList[i].onclick = function () {
            if (this.className == "list on") {
                return;
            }
            count = this.num;
            var offset = -600 * (count - index);
            //防止图片移动时恶意点击
            if (animated) {
                return;
            }
            move(offset);
            index = count;
            showIndex();
        }
    }
    //定时器
    function play() {
        timer = setInterval(function () {
            right.onclick();
        }, interval);
    }
    //关闭定时器
    function stop() {
        clearInterval(timer);
    }
    //鼠标移动到图片上时停止自动轮播
    oBox.onmouseover = function(){
        oBtn.style.display = "block";
        stop();
    };
    //鼠标离开时开启轮播
    oBox.onmouseout = function(){
        oBtn.style.display = "none";
        play();
    };
    //执行定时器
    play();
};