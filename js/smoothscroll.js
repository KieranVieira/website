$("#sub-button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#secondItem").offset().top
    }, 1000);
});

$("#sub-button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#firstItem").offset().top
    }, 500);
});

$("#sub-button3").click(function() {
    $('html, body').animate({
        scrollTop: $("#thirdItem").offset().top
    }, 1500);
});