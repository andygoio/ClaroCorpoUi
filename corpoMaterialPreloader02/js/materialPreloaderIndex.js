jQuery(document).ready(function($) {
    preloader = new $.materialPreloader({
        position: 'top',
        height: '4px',
        col_1: '#d32c1c',
        col_2: '#ddd',
        col_3: '#d32c1c',
        col_4: '#ddd',
        fadeIn: 200,
        fadeOut: 200
    });
    preloader.on();
    $('.on').on('click', function(event) {
        event.preventDefault();
        preloader.on();
    });
    $('.off').on('click', function(event) {
        event.preventDefault();
        preloader.off();
    });
});
