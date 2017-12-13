//页面加载完后执行脚本
window.onload = function(){
    //创建一个方法控制每个子盒子
    waterfall('main','box');

    var dataInt = { "data": [{ "src": '0.jpg' },{ "src": '1.jpg' }, { "src": '2.jpg' }, { "src": '3.jpg' }]};
    window.onscroll = function(){       //inscroll：页面滚动时执行函数
        if(checkScrollSlide){
            var oParent = document.getElementById('main');
            //将数据块渲染到页面的尾部
            for(var i = 0;i < dataInt.data.length;i++){     //遍历数据
                var oBox = document.createElement('div');
                oBox.className = 'box';
                oParent.appendChild(oBox);              //将子元素添加到父元素中
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var oImg = document.createElement('img');
                oImg.src = "images/" + dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfall('main', 'box');
        }       
    };
};
//根据class获取父元素下的所有子元素
function getByClass(parent, clsName) {
    // boxArr用来存储获取到的所有元素
    var boxArr = new Array,
        //将主元素中的所用子元素取出
        oElements = parent.getElementsByTagName('*');
    //遍历所有子元素
    for (var i = 0; i < oElements.length; i++) {
        //将className与传入class值相等的元素加入数组中
        if (oElements[i].className == clsName) {
            boxArr.push(oElements[i]);
        }
    }
    //返回数组
    return boxArr;
}

function waterfall(parent,box){
    //将主盒子全部取出来
    var oParent = document.getElementById(parent);
    //创建一个方法，将主盒子中的每个子盒子取出。(问题：为什么不用parent.getElementsByClassName('child')？？？)
    //将该方法的结果赋值给一个变量
    var oBoxs = getByClass(oParent,box);
    // console.log(oBoxs.length);  // 23
    //计算整个页面显示的列数(页面宽/每个box的宽)
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    console.log(cols);
    //设置主盒子的宽度
    oParent.style.cssText = 'width:' + oBoxW*cols + 'px;margin:0 auto';   
    
    var hArr = [];          //存放每一列的高度
    for(var i = 0;i < oBoxs.length;i++){        //遍历所有子盒子
        if(i < cols){
            hArr.push(oBoxs[i].offsetHeight);   //第一列行每张图片的高度
        }else{
            var minH = Math.min.apply(null,hArr);   //求出第一列数组中的最小值(高度最小的那个子盒子)
            //创建一个函数，找到最小高度子盒子的索引 (问题：JS中没有一种方法能直接找到那个索引？？？)
            var index = getMinIndex(hArr,minH);     //用变量接受所获得的索引
            //确定子盒子的位置
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            // oBoxs[i].style.left = oBoxW*index + 'px';   //left等于盒子宽度*当前找到的索引值
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //原数组的高度需要改变
            hArr[index]+=oBoxs[i].offsetHeight;
        }
    }
}

//arr：代表要传入的数组   min：代表传入的那个值
function getMinIndex(arr,val){
    for(var i in arr){          //遍历数组
        if(arr[i] == val){      
            return i;           //返回索引
        }
    }
}

//检测是否具备了加载数据块的条件
function checkScrollSlide(){
    var oParent = document.getElementById('main');
    var oBoxs = getByClass(oParent,'box');
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollTop);
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollTop + height) ? true : false;
}