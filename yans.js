
        


        //底部
var oFootLists=document.getElementsByClassName('oFoot-lists');

for(var i=0;i<oFootLists.length;i++){
    oFootLists[i].onclick=function(){
        for(var i=0;i<oFootLists.length;i++){
            var classNN=oFootLists[i].getAttribute('class');
            classNN=classNN.replace('oChose','');
            oFootLists[i].setAttribute('class',classNN);
        }
        this.classList.add('oChose');
    }
}

   
// 获取置顶按钮
var oToTop=document.getElementsByClassName("oTo-top")[0];

// 置顶按钮判断显隐
window.onscroll=function(){
    var ScrollH=document.documentElement.scrollTop||window.pageXOffset;
    if(ScrollH>=300){
        oToTop.style.display="block";
    }else{
        oToTop.style.display="none";

    }

}
// 点击事件
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

// 加入购物车

// var addCart=document.getElementsByClassName('addCart');
// for(var i=0;i<addCart.length;i++){
//     addCart[i].clickIf2=true;
//     addCart[i].onclick=function(){

//     if(this.clickIf2){
//             this.classList.add('addCartColor');
//             // console.log(clickIf2)
//             this.clickIf2=false;
        
//     }else{
//             this.classList.remove('addCartColor');
//             // console.log(clickIf2)
//             this.clickIf2=true;
//     }
    
// }
// }




