// amaran Annotation:

  $(document).ready(function() {
      
   var r= $.amaran({
        content:{
            targetIdWidth:'5em',
            targetIdHeight:'5em',
            targetIdPositionTop:'-3.8em',
            targetIdPositionLeft:'-2.5em',
            boxShadow: '0 0 0 5000px rgba(211, 188, 28, 0.94)',
            color:'#fff',
            leyendContainerTop:'5em',
            leyendContainerLeft:'5em',
            message:'Presione <strong>Menu</strong> para desplegar las opciones del mismo.'
           },
 //       theme:'user',
        delay: 999000,
       theme:'annotation',
        position:'top left',
//        closeButton:true,
        closeButton:false,
//        cssanimationIn: 'tada',
        cssanimationIn: 'fadeIn',
        cssanimationOut: 'fadeOut',
        targetId: '#menu-icon'
//        targetId: '#menu1'
//       targetId: '#ClaroLogo01'
//       targetId: '#ClaroLogo02'
    });
      
  });

// amaran Annotation2:
  $('#buttonAnnotationOverlayEntendidoOne').on('click',function(){
  var var2= $.amaran({
        content:{
            targetIdWidth:'5em',
            targetIdHeight:'5em',
            targetIdPositionTop:'-3.8em',
            targetIdPositionLeft:'-2.5em',
            boxShadow: '0 0 0 5000px rgba(28, 211, 79, 0.94)',
            color:'#fff',
            leyendContainerTop:'5em',
            leyendContainerLeft:'5em',
            message:'Presione <strong>Menu</strong> para desplegar las opciones del mismo.'
           },
 //       theme:'user',
        delay: 999000,
       theme:'annotation',
        position:'top left',
//        closeButton:true,
        closeButton:false,
//        cssanimationIn: 'tada',
        cssanimationIn: 'fadeIn',
        cssanimationOut: 'fadeOut',
        targetId: '#menu-icon'
//        targetId: '#menu1'
//       targetId: '#ClaroLogo01'
//       targetId: '#ClaroLogo02'
    });
});