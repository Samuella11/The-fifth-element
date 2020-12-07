// Effect function
$(window).scroll(function () {
    $('.header').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("slideLeft");
        }
    });
});