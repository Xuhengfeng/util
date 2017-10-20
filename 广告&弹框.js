
    // 弹出框
    $('.denglu').click(function(){
      $('.pop').fadeIn();
    });
    $('.tab_title a').click(function(){
      $('.pop').fadeOut();
    });


    // 广告
    $('#ad').animate({
        'marginTop': '0px','transition':'marginTop 3s ease'
    }, 3000,function(){
      $('.ad-btn').click(function(){
        $('#ad').slideUp("slow");
      });
    })

