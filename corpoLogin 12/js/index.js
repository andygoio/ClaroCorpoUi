$('.switch').click(function(){
   $(this).children('i').toggleClass('fa-key');
    jQuery('.tooltip-Recuperar-Clave').toggle('show');
   $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
   $('.register').animate({height: "toggle", opacity: "toggle"}, "slow");
});


$('.cancel-captcha').click(function(){
   $('.switch').children('i').toggleClass('fa-key');
    jQuery('.tooltip-Recuperar-Clave').toggle('show');
   $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
   $('.register').animate({height: "toggle", opacity: "toggle"}, "slow");
});

//$('.tooltip').click(function(){
$('#tooltip-item').click(function(){
    $('.tooltip').toggleClass('tooltip-click');
    $('.tooltip-content').toggleClass('tooltip-content-click');
    $('.tooltip-text').toggleClass('tooltip-text-display');
});

//canvas loader
$('#button-login-ingresar').click(function(){
    $('#canvasloader-container').toggleClass('display-canvasloader-when-load');
    $('#button-login-ingresar > span').toggleClass('display-ingresar-text-when-load');
});


// amaran Notification:
  $('#button-login-ingresar').on('click',function(){
    $.amaran({
        content:{
            bgcolor:'#000',
            color:'#d32c1c',
            message:'El número de cuenta ingresado y/o la clave, son erróneos. Por favor, verifique los datos e inténtelo nuevamente.'
           },
        theme:'user',
        position:'bottom right',
        closeButton:true,
        cssanimationIn: 'tada',
        cssanimationOut: 'zoomOut',
		delay: 7000
    });
  });


