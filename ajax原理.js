	/*Ajax 是一种主要使用脚本操纵HTTP的web应用架构，不会导致页面重载，避免页面重载。*/
	/*
		XMLHttpRequest对象 对象用于在后台与服务器交换数据。

		open()方法：三个参数
			1：发送请求的类型：get post
			2：请求的URL地址
				url相当于执行当前页面（绝对路径也可以）
				调用open方法并不会真正的发送请求，这是启动一个请求以备发送
			3: 是否异步的请求布尔值，true（异步），false（同步）
		send()方法：要发送特定请求：使用get请求类型是，括号内为null
									使用post请求类型时，括号内为请求数据
		responseText 作为响应主体被返回的文本
		readyState 表示请求/响应过程的当前活动状态
			0：未初始化，尚未调用open()方法
			1：启动，已经调用open()方法，但尚未调用send()方法
			2: 发送，已经调用send()方法，但尚未接收到响应
			3：接收，已经接收到部分响应数据
			4：完成，已经接收全部响应数据，而且已经可以在用户端使用
			注意：readyState属性的值每一次改变，都会触发一次onreadystatechange，可以利用这个事情来监听readyState的值
		onreadystatechange 返回监听
		status ：响应HTTP状态
		JSON.parse(responseText):把字符串解析成为json格式对象



	 */

		//自定义函数创建ajax对象(兼容版) 
		function createAjax(){ 

			//1.自定义一个对象来装载生成的ajax对象 
			var aj = false;

			//2.封装原生ajax对象 

			//分两种情况 
			//1.非IE(除了IE7和IE8) 
			if(window.XMLHttpRequest){ 
				aj = new XMLHttpRequest();

				//mime类型支持判断 
				if(aj.overrideMimeType){ 
					aj.overrideMimeType('text/xml');
				}
			//IE
			}else if(window.ActiveXObject)
			{ 
				//区分不同版本的IE
				var versions = [ 
					'Microsoft.XMLHTTP',
					'MSXML.XMLHTTP',
					'MSXML2.XMLHTTP.3.0',
					'Msxml2.XMLHTTP.4.0',
					'Msxml2.XMLHTTP.5.0',
					'Msxml2.XMLHTTP.6.0',
					'Msxml2.XMLHTTP.7.0'
				];

				//遍历版本数组 

				for(var i=0;i<versions.length;i++){ 
					try{ 
						//尝试执行下面的代码
						aj = new ActiveXObject(versions[i]);

						if(aj){ 
							return aj;
						}
					}catch(e){ 
						//抛异常
						aj = false;
					}
				}

			}

			return aj;
		}
		//使用方法
		//var ajax = createAjax(); 相当于 varajax = new XMLHttpRequest;
		//
		// 例子1
		
			var ajax = createAjax();//再创建对象
			//ajax监听事件 
			ajax.onreadystatechange = function(){ 
				//ajax状态码   //返回状态信息
				if(ajax.readyState == 4 && ajax.status == 200){ 	
						//接收服务器返回值信息 返回信息一般为json格式
						          var data = ajax.responseText;
						//解析方法2
						var obj = JSON.parse(data);//把字符串解析为json对象
						
						document.getElementById('one').innerHTML+='username:'+obj.username+',age:'+obj.age+"<br>";
				}
			}

			/*post传输的方式*/
			ajax.open("post","server.php",true);
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			// post方式传输，必须使用请求头信息
			ajax.send("username=lisi&age=20");//post传输的参数写在send中



			/*get传输的方式 没有头信息*/
			ajax.open("post","server.php?username=lisi&age=20",true);
			ajax.send(null);//get传输写在send中的是null


			// 超时设定：
			ajax.open("post","server.php?username=lisi&age=20",true);
			ajax.timeout =1000;//超时1秒（使用与IE8）
			ajax.ontimeout = function(){
				alert('超时了');
			}
			ajax.send(null);//get传输写在send中的是null


			// 跨域技术


			// 	2、JSONP(可查xmind笔记)
					/*JSONP由两部分组成：回调函数和数据
						回调函数是当响应到来时应该在页面中调用的函数。回调函数的名字一般是在请求中指定，而数据就是传入回调函数中的json数据。
						url:"http://www.baidu.com/json/?callback = handleResponse"
						这里指定的回调函数的名字是handleResponse

					相对图像ping，优点在于，可以直接访问响应文本，支持在浏览器与服务器之间的双向通信

					不足：1、在加载其他域代码执行，如果其他域不安全，很可能夹带一些恶意代码，此时除了完全放弃jsonp调用以外，别无它法
						  2、要确定jsonp请求失败不容易，虽然html5给script标签新增了onerror事件处理程序，但目前没有任何浏览器支持
*/



/*
get  
	ajax.open("get","server.php?name = "+name.value+"&pass = "+pass.value,true);
	ajax.send();

post 
	ajax.open("post","server.php",true);
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(name = "+name.value+"&pass = "+pass.value");

*/
