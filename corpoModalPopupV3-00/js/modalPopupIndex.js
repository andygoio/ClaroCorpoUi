$(document).ready(function() {
    $('#open').click(function() {
      $('#blackout').addClass('visable');
      $('#popup').addClass('visable');
    });
    $('#blackout, #close').click(function() {
      $('#blackout').removeClass('visable');
      $('#popup').removeClass('visable');
    });
});

// (*** Waves ***)
  Waves.displayEffect();
// /(*** Waves ***)