;$(function(){
  var oIpt1=document.querySelectorAll('input')[0];
  var oIpt2=document.querySelectorAll('input')[1];
  var a=false,b=false,c=false;//判断提交按钮是否可以使用

  //oIpt1事件
  $(oIpt1).on({
    blur:function(){
      var pattern=/^1[3578]\d{9}$/;
      if(oIpt1.value==''){
          $('.error1').show().html('手机号码不能为空!'); 
      }else{
          if(oIpt1.value.length<11){
              $('.error1').show().html('手机长度必须是11位!');
              $(oIpt1).val('');
              if(!pattern.test(oIpt1.value)&&oIpt1.value.length==11){
                  $('.error1').show().html('手机号码不正确,请重新输入!');
                  $(oIpt1).val('');
              }
          }
      }
    },
    change:function(){
      if(oIpt1.value.length==11){
          $('.error1').hide();
          a=true;
          $('.MessageLogin span').css({'background':'#4cd964'}).click(function(){
              $('.shadow').show();
          })
          $('.shadow span').click(function(){
              $('.shadow').hide();
          })

      }
    }
  })

  //oIpt2事件
  $(oIpt2).on({
    blur:function(){
        var pattern=/^[0-9a-zA-Z]{5,}$/;
        if(oIpt2.value==''){
            $('.error2').show().html('验证码不能为空!');
        }else{
            if(!pattern.test(oIpt2.value)){
                $('.error2').show().html('验证码不正确!');
                $(oIpt2).val('');
            }
        }
    },
    change:function(){
      if(oIpt2.value.length>0){
          $('.error2').hide(); 
          b=true;
      }
    }
  })


  // 提交事件
  $('button').attr('disabled','disabled'); 
  $('input').change(function(){
      c=true;
      if(oIpt1.value==''){
        $('.error1').show().html('手机号码不能为空!');
      };
      if(oIpt2.value==''){
        $('.error2').show().html('验证码不能为空!');
      }
      if(a==true && b==true && c==true){
          $('button').removeAttr('disabled','disabled');
            console.log(1);
      }
     
  })


})












