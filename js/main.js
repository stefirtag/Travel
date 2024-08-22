$(document).ready(function () {
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,

        prevArrow: '<button class="slick-prev btn-slick-prev btn btn-slider" aria-label="Previous" type="button"><img src="images/left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-next btn-slick-next btn btn-slider" aria-label="Next" type="button"><img src="images/right.png" alt="next"></button>',
        // prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">asdasd</button>',
        // nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="images/right.png" alt=""></button>'

        // prevArrow: '<button type="button" class="btn-slick-prev btn btn-slider"><img src="images/left.png" alt="prev"></button>',
        // nextArrow: '<button type="button" class="btn-slick-next btn btn-slider"><img src="images/right.png" alt="next"></button>'
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 851,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });

    $(".mobile-menu").click(function () {
        $(".mobile-menu span").toggleClass('active');
        $(".menu").toggleClass('active');
        $("body").toggleClass('owerlay');

    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 99) {
            $('.header-top').addClass('header-top-fixed')
        }
        else {
            $('.header-top').removeClass('header-top-fixed')
        }
    })

});

AOS.init({
    duration: 1200
});

//https://github.com/michalsnik/aos