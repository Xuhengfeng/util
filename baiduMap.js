<script src="http://api.map.baidu.com/api?v=2.0&amp;ak=YFz5e0KBTd4dQxQMiGfGbEgaaEww6jA1"></script>
<script type="text/javascript">
 	var map = new BMap.Map("allmap"); // 创建地图实例  
 	var point = new BMap.Point(114.02597366,22.54605355); // 创建点坐标  
 	map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
 	(function(){
	// 定位引擎
		var geolocation = new BMap.Geolocation();
		// geolocation.getCurrentPosition(成功回调函数,配置)
		geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
		
					var mk = new BMap.Marker(r.point);
					map.addOverlay(mk);
					map.panTo(r.point);//将地图移动到 
					// alert('您的位置：'+r.point.lng+','+r.point.lat);
					getPos(r.point);
				}
		},{enableHighAccuracy: true})
	})();
	// 逆地址解析引擎
	function getPos(pt){
		// pt是一个坐标容器
		var geoc = new BMap.Geocoder();  
			geoc.getLocation(pt, function(rs){
				var addComp = rs.addressComponents;
				// console.log(addComp);
				alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			});     
	}
	
</script>