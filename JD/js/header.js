


/*
    搜索提示框
 */
//1.找到需要控制的元素
var key = document.getElementById("key");
var form = document.getElementById("form");
var shelper = document.getElementById("shelper");

//2.给它绑定鼠标点击事件
key.onclick = function(){
    shelper.style.display = "block";
};
//3.给form绑定onmouseleave事件
form.onmouseleave = function(){
    shelper.style.display = "none";
};


/*
    滚动条事件
    这个事件就是：window.onscroll。当onscroll事件发生时，用js获得页面的scrollTop值，判断scrollTop为一个设定值时，显示指定页面
 */

//1.命名滚动条事件
window.onscroll = function(){
//2.定义页面的scrollTop值
    var t = document.documentElement.scrollTop || document.body.scrollTop;
//   console.log("t");

    //3.找到要控制的元素
    var search = document.getElementById("search");

    //4.对t的值进行判断
    if(t >=170){
        search.className = "search-fix";
    }else{
        search.className = "";
    }
};

//购物车
var settleup = document.getElementById("settleup");
var J_shopping = document.getElementById("J_shopping");
var J_shopping_more = document.getElementById("J_shopping_more");
settleup.onmouseover = function(){
    J_shopping_more.style.display = "block";
    //让其颜色一致
    J_shopping.style.borderColor = "#ccc";
    //覆盖边框重合部分
    J_shopping.style.borderBottom = "2px solid #fff";
};
settleup.onmouseout = function(){
    J_shopping_more.style.display = "none";
    J_shopping.style.border = "1px solid #e3e4e5";
};