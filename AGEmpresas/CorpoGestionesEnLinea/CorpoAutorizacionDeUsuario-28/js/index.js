// amaran Notification:
  $('#buttonContinue').on('click',function(){
    $.amaran({
        content:{
            bgcolor:'#000',
            color:'#d32c1c',
            message:'La línea que intenta ingresar no pertenece a la cuenta.'
           },
        theme:'errorMessage2',
        position:'bottom right',
        inEffect: 'slideRight',
        closeButton:true,
        delay: 7838383838393,
        targetId: '#authorization-user-message-error-container'
    });
  });
  
    $('#buttonContinue').on('click',function(){
    $.amaran({
        content:{
            bgcolor:'#000',
            color:'#d32c1c',
            message:'La línea ingresada se encuentra suspendida o en estado inactivo.'
           },
        theme:'errorMessage2',
        position:'bottom right',
        inEffect: 'slideRight',
        closeButton:true,
        delay: 7838383838393,
        targetId: '#authorization-user-message-error-container1'
    });
  });