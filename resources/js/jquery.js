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

    $('.js--projects').waypoint(function(direction){
            $('.js--projects').addClass('animated fadeIn');
        }, {
            offset: '60%'
        });

        $('.js--wp-4').waypoint(function(direction) {
            // 增加第一个animation
            $('.js--wp-4').addClass('animated zoomIn');
        }, {
            offset: '90%'
        });
});
