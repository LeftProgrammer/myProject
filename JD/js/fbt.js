


/*
    鼠标移动图片位移效果
 */
// //1.找到要控制的元素
// var findItem1k = document.getElementById("findItem1k");
// // var findItemName = document.getElementById("findItemName");
// var findItemImg = document.getElementById("findItemImg");
//
// //2.给findItem1k绑定鼠标移动事件
// findItem1k.onmouseover = function(){
//     //鼠标放上去图片位置改变
//     findItemImg.style.right = "15px";
// };
// findItem1k.onmouseout = function(){
//     //鼠标离开图片回到原来位置
//     findItemImg.style.right = "10px";
// };



/*
    选项卡事件
 */
//1.找到要控制的元素
var oItems = document.getElementsByClassName("J_tab_head_item");
//     console.log(oItems);
var active = document.getElementById("J_top_tab_active");
// var tabContent = document.getElementsByClassName("J_tab_content")[0];
var oDivs =document.getElementsByClassName('J_tab_content-item');

//2.遍历oItems，并将其绑定鼠标移动事件
for(var i = 0;i < oItems.length;i++){
    //3.保存当前的位置
    oItems[i].index = i;

    //4.给oItems绑定鼠标移动事件
    oItems[i].onmouseover = function(){
        //5.遍历oDivs
        for(var j = 0;j < oDivs.length;j++){
//            J_tab_head_item[j].className = "";

            //6.让所有的DIV为默认样式，并都不显示
            oDivs[j].className = "J_tab_content-item";
        }
//         this.className = "top_tab_head_item";
        //7.设置当前的DIV为block
        oDivs[this.index].className = "on J_tab_content-item";

        //8.鼠标移动时，下面横线跟着移动，设置其transform属性
        active.style.transform = "translateX("+78*this.index+"px)";
    }
}