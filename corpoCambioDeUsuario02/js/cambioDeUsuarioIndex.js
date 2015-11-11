$(document).ready(function() {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in-right-sm',
    outClass              :   'fade-out-right-sm',
    inDuration            :    1000,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    loading               :    false,
    loadingParentElement  :   'body',
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});