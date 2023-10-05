$(document).ready(function () {
    // Get all div elements with the class .scroll-target
    var $divs = $('.scroll-target');
    var currentDiv = 0;

    // Add a click event listener to the scroll button
    $('#scrollButton').click(function () {
        // Scroll down to the second div if not already at the last div
        if (currentDiv < $divs.length - 1) {
            currentDiv++;
            var targetTop = $divs.eq(currentDiv).offset().top;
            $('html, body').stop().animate({
                scrollTop: targetTop
            }, 600);
        }
    });
});