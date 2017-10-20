function Ajax(getType) { 
	//创建一个新的对象 
	var ajax = new Object();

	ajax.getType = getType ?getType.toUpperCase() : 'HTML';
	ajax.url = '';//url地址
	ajax.sendContent = '';//发送过来的数据
	//封装ajax对象
	ajax.getXMLHttpRequest = function() { 

		var aj = false;
			//分两种情况获取对象 


			//非IE(除了IE7和IE8)
			if(window.XMLHttpRequest){ 

				aj = new XMLHttpRequest();

				if(aj.overrideMimeType){ 
					aj.overrideMimeType('text/xml');
				}
			//IE
			}else if(window.ActiveXObject) { 
						
				//区分不同版本
					var versons = [ 
						'Microsoft.XMLHTTP',
						'MSXML.XMLHTTP',
						'MSXML2.XMLHTTP.3.0',
						'Msxml2.XMLHTTP.4.0',
						'Msxml2.XMLHTTP.5.0',
						'Msxml2.XMLHTTP.6.0',
						'Msxml2.XMLHTTP.7.0'
					];

					for(var i=0;i<versons.length;i++){ 

						try{ 
							//试着执行下面的代码
							aj = new ActiveXObject(versons[i]);

							return aj;

						}catch(e){ 
							aj = false;
						}

					}
			}

			return aj;

	};


	//接收用户的回调函数
	ajax.resHandle = '';

	//获取ajax的XMLHttpRequest对象
	ajax.XMLHttpRequest = ajax.getXMLHttpRequest();

	//封装ajax方法  
	//1.get
	ajax.get = function(url,resHandle) { 
		
		//将用户传递进来的url信息赋值给内部属性
		ajax.url = url;

		//判断resHandle是否为空
		if(resHandle != null){ 

			ajax.XMLHttpRequest.onreadystatechange = ajax.doHandle;
			ajax.resHandle = resHandle;
		}

		if(window.XMLHttpRequest){ 
			ajax.XMLHttpRequest.open('get',ajax.url);
			ajax.XMLHttpRequest.send(null);
		}else{ 
			ajax.XMLHttpRequest.open("get",ajax.url,true);
			ajax.XMLHttpRequest.send();
		}

	};

	//处理ajax监听事件
	ajax.doHandle = function() { 

		//判断 
		if(ajax.XMLHttpRequest.readyState == 4){ 
			if(ajax.XMLHttpRequest.status == 200){ 
				if(ajax.getType == 'HTML'){ 
					//响应ajax
					ajax.resHandle(ajax.XMLHttpRequest.responseText);
				}
			}
		}
	}

	//2.post
	ajax.post = function(url,sendContent,resHandle) { 

		//将实参赋值给变量
		ajax.url = url;

		//判断
		if(typeof sendContent == 'object'){ 
			var str = '';
			//遍历对象 
			for(var i in sendContent){ 
				str+=i+"="+sendContent[i]+"&";//username=lisi&age=20&
			}
			//去掉最后一个"&"
			ajax.sendContent = str.substr(0,str.length-1);

		}else{ 
			ajax.sendContent = sendContent;
		}

		//处理回调函数
		if(resHandle != null){ 
			//处理监听事件
			ajax.XMLHttpRequest.onreadystatechange = ajax.doHandle;
			ajax.resHandle = resHandle;
		}

		//处理ajax请求 
		ajax.XMLHttpRequest.open("post",url);
		ajax.XMLHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.XMLHttpRequest.send(ajax.sendContent);

	}

	return ajax;
}










