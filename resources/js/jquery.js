$(function() {
    $(window).scroll(function() {
        $('.chart').easyPieChart({
            animate: 3000,
            barColor: "#38A1F3",
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    });
});

$(document).ready(function() {

    $('.js--scroll-more').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-about-me').offset().top }, 1000);
    });

    $('.contact').click(function() {
        alert("Email: sxxia12@gmail.com");
    });

    $('.js--section-about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('scroll-menu');
        } else {
            $('nav').removeClass('scroll-menu');
        }
    }, {
        offset: '60px'
    });



});