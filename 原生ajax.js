//方便性
//快捷性
//兼容性


//声明函数 封装ajax对象
function Ajax(){
     
     //1.创建兼容性函数 返回创建的ajax对象
     function createXHR(){
          //声明对象变量
          var xhr=null;
          //非IE
          if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
          //IE浏览器
          }else if(window.ActiveXObject){
               //两个参数
               var version=['Microsoft','XMLHTTP'];
               //坐下遍历
               for(var i=0;i<version.length;i++){
                    //创建对象
                    xhr=new ActiveXObject(version[i]); 
                    //判断是否创建成功
                    if(xhr.open){
                         break;
                    }    
               }
          }else{
               xhr=false;
          }
     
          //返回创建的xhr对象
          return xhr;
     }
     
     
     //3.声明xx空对象
     var xx={};
     
     //2.给ajax空对象的属性赋值 ==创建的ajax兼容对象
     xx.obj=createXHR();
     
     
     
     //get
     //4.给ajax对象添加方法
     xx.get=function(url,callback){
          //建立ajax请求
          xx.obj.open('get',url);
          
          //发送请求
          xx.obj.send(null);
          
          //输出返回的结果
          this.pub(callback);
     
     }
     
     //post
     //给xx对象添加post方法
     xx.post=function(url,date,callback){
          //建立ajax请求
          xx.obj.open('post',url);
          
          //设置头信息
          xx.obj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          
          //发送请求
          xx.obj.send(date);
          
          //返回处理的信息
          this.pub(callback);
     
     }
     
     
     
     
     //5.设置共有的返回信息方法
     xx.pub=function(callback){
          //调用判断方法
          xx.obj.onreadystatechange=function(){
               //判断发送是否成功
               if(xx.obj.readyState==4){
                    //判断服务器返回是否成功
                    if(xx.obj.status==200){
                         //输出返回的信息
                         callback(xx.obj.responseText);
                    }
               }
          }
     }
     

     
     //返回自己制作的ajax
     return xx;
}




//html结构 里面调用方式
// <!doctype html>
// <title>ajax 对象工具</title>
// <meta charset="utf-8">
// <script src="ajax.js"></script>
// <script>
//      var a=Ajax();
//      console.log(a);
     
//      a.get('5-1.php?name=yuyu&sex=nv&age=18',alert);
//      a.post('5-1.php','name=erhou&sex=nan&age=40',alert);
// </script>