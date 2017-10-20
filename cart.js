

var oFootLists=document.getElementsByClassName('oFoot-lists');

for(var i=0;i<oFootLists.length;i++){
    oFootLists[i].onclick=function(){
        for(var i=0;i<oFootLists.length;i++){
            var classNN=oFootLists[i].getAttribute('class');
            classNN=classNN.replace('oChose','');
            oFootLists[i].setAttribute('class',classNN);
            console.log(oFootLists[i])
        }
        this.classList.add('oChose');
    }
}

   
// 获取置顶按钮
var oToTop=document.getElementsByClassName("oTo-top")[0];

// 置顶按钮判断显隐
window.onscroll=function(){
    var ScrollH=document.documentElement.scrollTop||document.body.scrollTop||window.pageXOffset;
    if(ScrollH>=300){
        oToTop.style.display="block";
    }else{
        oToTop.style.display="none";

    }

}
// 点击置顶事件
oToTop.onclick=function(){
    var ScrollH=document.documentElement.scrollTop||document.body.scrollTop||window.pageXOffset;
    if(document.documentElement.scrollTop){
        document.documentElement.scrollTop="0";
    }else if(document.body.scrollTop){
        document.body.scrollTop="0";
    }else{
        window.pageXOffset="0";
    }
}

// 编辑操作
var CartOperate=document.getElementsByClassName("Cart-operate")[0];
var bj=true;
var oJian=document.getElementsByClassName("oJian");
var oJia=document.getElementsByClassName("oJia");
CartOperate.onclick=function(){
    if(bj){
        console.log(1)
        this.innerHTML="完成";
        this.style.color="#b4282d";
        for(var i=0;i<oJian.length;i++){
            oJian[i].style.display="inline";
            oJia[i].style.display="inline";
        }

        var cartGoods=document.getElementsByClassName("cartGoods");
        bj=false;

    }else{
        this.innerHTML="编辑";
        this.style.color="#000";
        for(var i=0;i<oJian.length;i++){
            oJian[i].style.display="none";
            oJia[i].style.display="none";
        }
        bj=true;
    }

    
}

//按钮添加





