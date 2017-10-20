//html结构
// <div id="area">将图片拖拽到此区域</div> 
// <div id="preview"></div>



//在创建 web worker 之前，判断是否为支持HTML5的浏览器
if (typeof(Worker) !== "undefined") {
    // 浏览器支持HTML5
} else {
    // 浏览器不支持HTML5
}



//阻止浏览器默认的拖拽操作：
$(document).on({
    dragleave:function(e){        //拖离
        e.preventDefault();
    },
    drop:function(e){            //拖后放
        e.preventDefault();
    },
    dragenter:function(e){        //拖进
        e.preventDefault();
    },
    dragover:function(e){        //拖来拖去
        e.preventDefault();
    }
    });


//上传，主要用到文件API中的一个FileList接口，
//通过e.dataTransfer.files拖拽事件传递的文件信息
//获取本地文件列表信息，通过length属性获取文件数量。
var box = document.getElementById('area'); //拖拽区域
box.addEventListener("drop",
function(e) {
    e.preventDefault(); //取消默认浏览器拖拽效果
    var fileList = e.dataTransfer.files; //获取文件对象
    //检测是否是拖拽文件到页面的操作
    if (fileList.length == 0) {
        return false;
    }
    //检测文件是不是图片
    if (fileList[0].type.indexOf('image') === -1) {
        alert("您拖的不是图片！");
        return false;
    }
    //拖拉图片到浏览器，可以实现预览功能
    var img = window.webkitURL.createObjectURL(fileList[0]);
    var filename = fileList[0].name; //图片名称
    var filesize = Math.floor((fileList[0].size) / 1024);
    if (filesize > 500) {
        alert("上传大小不能超过500K.");
        return false;
    }
    //alert(filesize);
    var str = "<img src='" + img + "'><p>图片名称：" + filename + "</p><p>大小：" + filesize + "KB</p>";
    $("#preview").html(str);

    //上传
    xhr = new XMLHttpRequest();
    xhr.open("post", "upload.php", true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    var fd = new FormData();
    fd.append('mypic', fileList[0]);

    xhr.send(fd);

},
false);








//后端PHP接收上传的文件信息(用于测试)
<?php
$mypic = $_FILES["mypic"];
if(!empty($mypic)){
    $picname = $_FILES['mypic']['name'];
    $picsize = $_FILES['mypic']['size'];
    if ($picsize > 512000) {
        echo '图片大小不能超过500k';
        exit;
    }
    $type = strstr($picname, '.');
    if ($type != ".gif" && $type != ".jpg") {
        echo '图片格式不对！';
        exit;
    }
    $pics = 'hello' . $type;
    //上传路径
    $pic_path = "pics/". $pics;
    move_uploaded_file($mypic["tmp_name"],$pic_path);
}
?>
<meta charset="utf-8">
<form action="" method="post" enctype="multipart/form-data">
<input type="file" name="mypic">
<input type="submit" value="上传">
</form>

