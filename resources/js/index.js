// scroll.js
$(document).ready(function () {
    // Get all div elements with the class .scroll-target
    var $divs = $('.scroll-target');
    var currentDiv = 0;
    var scrollThreshold = 300; // Adjust this value as needed
    $('html, body').stop().animate({
                scrollTop: 0
            }, 'fast');

    // Add a scroll event listener
    $(window).on('wheel', function (event) {
        // Calculate the direction of the scroll
        var delta = event.originalEvent.deltaY;
        console.log(delta)
        // Check if the scroll direction is down (positive delta) or up (negative delta)
        if (delta > 0 && currentDiv < $divs.length - 1) {
            // Scroll down to the following div
            currentDiv++;
            var targetTop = $divs.get(currentDiv).getBoundingClientRect().top + window.scrollY;
            $('html, body').stop().animate({
                scrollTop: targetTop
            }, 600);
        } else if (delta < 0) {
            // Scroll up
            console.log($divs.get(currentDiv).getBoundingClientRect().top)
            if ($divs.get(currentDiv).getBoundingClientRect().top > scrollThreshold) {
                // Scroll up to the first div only if scrolled more than the threshold
                currentDiv = 0;
                $('html, body').stop().animate({
                    scrollTop: 0
                }, '600');
            }
        }
        
    });
});
