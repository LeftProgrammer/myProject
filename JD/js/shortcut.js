


//选择要控制的元素
// var dorpDown = document.getElementsByClassName("J_dorpDown");
var cw_icon = document.getElementById("J_cw_icon");
var dorpDown_layer = document.getElementById("J_dorpDown_layer");
//向指定元素绑定鼠标移动事件
cw_icon.onmouseover = function(){
    dorpDown_layer.style.display = "block";
    // dorpDown_layer.style.borderTop = "#fff";
};
cw_icon.onmouseout = function(){
    dorpDown_layer.style.display = "none";
};

//我的京东
var myJD = document.getElementById("J_myJD");
var myJD_more = document.getElementById("J_myJD_more");
myJD.onmouseover = function(){
    myJD_more.style.display = "block";
    // myJD_more.style.borderTop = "#fff";
};
myJD.onmouseout = function(){
    myJD_more.style.display = "none";
};

//客户服务
var serve = document.getElementById("J_serve");
var serve_more = document.getElementById("J_serve_more");
serve.onmouseover = function(){
    serve_more.style.display = "block";
    // serve_more.style.borderTop = "#fff";
};
serve.onmouseout = function(){
    serve_more.style.display = "none";
};

//网站导航
var J_nav = document.getElementById("J_nav");
var J_nav_more = document.getElementById("J_nav_more");
J_nav.onmouseover = function(){
    J_nav_more.style.display = "block";
    // J_nav_more.style.borderTop = "#fff";
};
J_nav.onmouseout = function(){
    J_nav_more.style.display = "none";
};

//手机京东
var J_phone = document.getElementById("J_phone");
var J_phone_more = document.getElementById("J_phone_more");
J_phone.onmouseover = function(){
    J_phone_more.style.display = "block";
    // J_phone_more.style.borderTop = "#fff";
};
J_phone.onmouseout = function(){
    J_phone_more.style.display = "none";
};

