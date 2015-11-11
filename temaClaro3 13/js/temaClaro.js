// Efecto de transicion Menu>Flecha o Flecha>Menu

var menutoggle = true
$(".menu-icon, .page-shader").click(function(){
  if (menutoggle == true){
    $(".main-menu-container").toggleClass("menu-open");
    $(".menu-icon").toggleClass("menu-open");
    $(".page-shader").toggleClass("menu-open");
    menutoggle = false;
    setTimeout(function(){
      menutoggle = true;
    }, 300);
  }
});


// Efecto Ripple

$(function() {
    $('#menu-icon').on('click', function(e) {
        if ( ! $(this).hasClass('anim')) {
            if ( ! $(this).hasClass('in')) {
                $(this).addClass('in');
            } else {
                $(this).removeClass('in')
                .addClass('out')
                .delay(500)
                .queue(function(next) {
                    $(this).addClass('no-trans').removeClass('out');

                    next();
                });
            }

            $(this).addClass('anim').delay(500).queue(function(next) {
                $(this).removeClass('anim');
                $(this).removeClass('no-trans');
                next()
            });
        }
    });
});