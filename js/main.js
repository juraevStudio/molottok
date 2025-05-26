$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__zipp").css({
        "transform" : "translate(0px, " + st/8 + "px"
    });
});