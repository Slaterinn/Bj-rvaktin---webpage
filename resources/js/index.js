$(document).ready(function () {
    // Get all div elements with the class .scroll-target
    var $div = $('#content-container-1');

    
    // Add a click event listener to the scroll button
    $('#scrollButton').click(function () {
        // Scroll down to the second div
        var targetTop = $div.offset().top;
        $('html, body').stop().animate({
            scrollTop: targetTop
        }, 600);

    });
});