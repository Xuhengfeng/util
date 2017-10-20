var oSon=document.querySelector('.son');
//垂直轮播封装函数
function animate(obj,offset){
// obj,offset,times,init
//垂直轮播
//offset每次位移总量  即动画显示区域的高 或者 宽,视项目要求而定
     var animate=true;
     var time=400;//位移总时间
     var interval=100;//位移间隔时间
     var speed=offset/(time/interval)//每次位移量
     var nowTop=parseInt(obj.style.marginTop)+offset;//现在的位移位置

     function go(){
          if((speed<0&&parseInt(obj.style.marginTop)>nowTop)||
               (speed>0&&parseInt(obj.style.marginTop)<nowTop)){
               obj.style.marginTop=speed+parseInt(obj.style.marginTop)+'px';
               setTimeout(go,interval);
          }else{
               animated=false;//动画运行停止
               obj.style.marginTop=nowTop+'px';
               if(-300==nowTop){
                    obj.style.marginTop=0
               }
          }
     }
     go();
}
function play(){
     timer=setInterval(animate(oSon,-60),1000);
}
// play()
setInterval(play,1000)



// 基本html结构 初始化
// <div class="father">
//      <div class="son" style="margin-top:-60px">
//           <p>我是文本5</p>
//           <p>我是文本1</p>
//           <p>我是文本2</p>
//           <p>我是文本3</p>
//           <p>我是文本4</p>
//           <p>我是文本5</p>
//      </div>
// </div>