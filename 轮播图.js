window.onload=function(){
               var container=document.querySelector('#container');
               var oUls=document.querySelector('.oUls');//位移对象
               var olis=oUls.querySelectorAll('li');
               var obtns=document.querySelector('.btns').querySelectorAll('span');
               console.log(obtns)
               var prev=document.querySelector('.prev');
               var next=document.querySelector('.next');
               var index=1;//第一图片
               var len=5;
               var animated=false;//动画未运行  是否进行动画存放
               var timer;


               // 显示按钮
               function showBtn(){
                    for(var i=0;i<obtns.length;i++){
                         if(obtns[i].className=='on'){
                              obtns[i].className='';
                              break;
                         }
                    }
                    obtns[index -1].className='on';
               }
               showBtn();



               // 图片切换
               function animate(offset){
                    // offset 每一张图片偏移量总量

                    animated=true;//动画运行中

                    var time=400;//位移总时间
                    var interval=10;//位移间隔时间
                    var speed=offset/(time/interval);//每次位移量
                    var left=parseInt(oUls.style.left)+offset;//现在的位移位置
                    console.log(speed)

                    function go(){
                         if((speed<0&&parseInt(oUls.style.left)>left)||(speed>0&&parseInt(oUls.style.left)<left)){
                              oUls.style.left=speed+parseInt(oUls.style.left)+'px';
                              setTimeout(go,interval); 

                         }else{
                              animated=false;//动画运行停止的时候
                              oUls.style.left=left+'px';
                              if(left>-500){
                                   oUls.style.left=-2500+'px';
                              }
                              if(left<-2500){
                                   oUls.style.left=-500+'px';
                              }
                         }
                    }
                    go();

               }

               // 上一张
               prev.onclick=function(){

                    if(index==1){
                         index=5;
                    }else{
                         index-=1;
                    }
                    console.log(index)
                    if(!animated){
                         animate(500);
                    }
                    showBtn();
               }
               // 下一张
               next.onclick=function(){
                    if(index==5){
                         index=1;
                    }else{
                         index+=1;
                    }
                    if(!animated){//判断是否是false; 也就是 animated==false;
                         animate(-500); 
                    }
                    showBtn();
               }


               //按钮点击
               for(var i=0;i<obtns.length;i++){
                    obtns[i].onmouseover=function(){
                         if(this.className=='on'){
                              return;
                         }
                         var myIndex=parseInt(this.getAttribute('index'));
                         var offset=-500*(myIndex-index);
                         if(!animated){
                              animate(offset);
                         }
                         index=myIndex;
                         showBtn();
                         // debugger;断点调试
                    }
               }


               //定时器 动画 停止
               function play(){
                    timer=setInterval(function(){
                         next.onclick();
                    },1000)
               }
               play();

               function stop(){
                    clearInterval(timer);
               }

               //鼠标移入事件
               container.onmouseover=function(){
                    stop();
                    prev.style.display='block';
                    next.style.display='block';
               }
               container.onmouseout=function(){
                    play();
                    prev.style.display='none';
                    next.style.display='none';
               }


          }