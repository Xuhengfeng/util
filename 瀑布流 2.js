     //获取ajax对象 
          var ajax = Ajax();

          var num = 20;//每次通过ajax请求图片的数量

          var page = 1;//指定页

          var flag = false;//设定标志位 

          getImage();

          //滚动事件 
          window.onscroll = function(){ 
               
               //滑动滚轮浏览网页隐藏在屏幕上面的距离
               var scroll_top = document.body.scrollTop || document.documentElement.scrollTop;

               //当元素有滚动条的时候 表示元素的可见部分的大小 
               //IE Opera 认为是网页高度  可以小于clientHeight
               //FF 认为scrollHeight是内容高度  最小值是clientHeight

               var scroll_height = document.body.scrollHeight || document.documentElement.scrollHeight;

               //触发条件 
               if((scroll_height-scroll_top)<3000 && flag){ 
                    
                    if(page == 5){
                         page = 1;
                    }

                    flag = false;
                    page++;
                    getImage();

               }


          }

          function getImage(){ 
               //使用ajax请求后台数据 
               ajax.get('./image.php?num='+num+'&page='+page,getImg);
          }

          function getImg(data){ 
               // alert(data);          
               var images = JSON.parse(data);
               // var images = eval('('+data+')');
               // alert(images);

               //获取页面上所有的Li节点 
               var oLi = document.getElementsByTagName('li');

               //遍历li节点 
               for(var i=0;i<oLi.length;i++){ 
                    //动态创建一个div节点 
                    var div = document.createElement('div');

                    //向div节点添加数据 
                    div.innerHTML = '<img src="'+ images[i].path +'" alt="" /><p>'+images[i].id+'</p>';

                    oLi[i%4].appendChild(div);

               }

               flag = true;

          }
