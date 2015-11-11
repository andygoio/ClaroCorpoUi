$(document).ready(function() {

    var pendingDelivery=true;
    if (pendingDelivery!=true) {
        $('.pending-delivery-display').addClass('no-pending-delivery-display');
        $('.no-pending-delivery').removeClass('no-pending-delivery-display');
        $('.no-pending-delivery').addClass('display-content');
    }

});