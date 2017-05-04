$(document).ready(function () {
    $("button").hide();
    $(".aflex").mouseover(function () {
        $("button").show();
    });
    $(".aflex").mouseout(function () {
        $("button").hide();
    });
});
