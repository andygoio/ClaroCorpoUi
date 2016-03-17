$('#ddi').click(function() {
    if($('#ddi').is(':checked')) {
        $("#ddi-label").removeClass("hide-label-direct-dial-status");
        $("#ddi-label").addClass("show-label-direct-dial-status");
        $("#ddn-label").removeClass("show-label-direct-dial-status");
        $("#ddn-label").addClass("hide-label-direct-dial-status");
        $("#ddi-full-label").removeClass("show-label-direct-dial-status");
        $("#ddi-full-label").addClass("hide-label-direct-dial-status");
    };
});

$('#ddn').click(function() {
    if($('#ddn').is(':checked')) {
        $("#ddi-label").removeClass("show-label-direct-dial-status");
        $("#ddi-label").addClass("hide-label-direct-dial-status");
        $("#ddn-label").removeClass("hide-label-direct-dial-status");
        $("#ddn-label").addClass("show-label-direct-dial-status");
        $("#ddi-full-label").removeClass("show-label-direct-dial-status");
        $("#ddi-full-label").addClass("hide-label-direct-dial-status");
    };
});

$('#ddiFull').click(function() {
    if($('#ddiFull').is(':checked')) {
        $("#ddi-label").removeClass("show-label-direct-dial-status");
        $("#ddi-label").addClass("hide-label-direct-dial-status");
        $("#ddn-label").removeClass("show-label-direct-dial-status");
        $("#ddn-label").addClass("hide-label-direct-dial-status");
        $("#ddi-full-label").removeClass("hide-label-direct-dial-status");
        $("#ddi-full-label").addClass("show-label-direct-dial-status");
    };
});