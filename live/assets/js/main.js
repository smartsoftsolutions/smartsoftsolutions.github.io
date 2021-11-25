(function ($) {
    "use strict";

    
    // initializing preloader
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });

    jQuery(document).ready(function($){

        // countdown
        var nodes = $('.timer');
        $.each(nodes, function (index, value) {
            var date = $(this).data('date');

            setInterval(() => {

                var endTime = new Date(date);
                endTime = (Date.parse(endTime) / 1000);

                var now = new Date();
                now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $(value).find('.day').html(days);
                $(value).find('.hour').html(hours);
                $(value).find('.minute').html(minutes);
                $(value).find('.second').html(seconds);

            }, 1000);


        })

        // searchbar initialization
        var src_btn = $('.searchbr').find('.input-group').find('#button-addon2');
        var cls_btn = $('.searchbr').find('.close-btn');
        src_btn.on('click', function(){
            if($(this).siblings('.form-control').hasClass('active')) {
                $(this).siblings('.form-control').removeClass('active');
                cls_btn.removeClass('active');
                console.log('active has not');
            } else {
                $(this).siblings('.form-control').addClass('active');
                cls_btn.addClass('active');
                console.log('active has there');
            }
        });

        cls_btn.on('click', function(){
            $('.searchbr').find('.form-control').removeClass('active');
            $(this).removeClass('active');
        });


        // index 2 slider initilalization
        $('.banner-circle-btn').on('click', function(e){
            e.preventDefault();
            var btn_id = $(this).attr('id');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $('.part-texts').find('.single-txt').removeClass('current-post');
            if(btn_id == 'slider-btn-01') {
                $('.part-texts').find('#slide-01').addClass('current-post');
            } else if (btn_id == 'slider-btn-02') {
                $('.part-texts').find('#slide-02').addClass('current-post');
            } else if (btn_id == 'slider-btn-03') {
                $('.part-texts').find('#slide-03').addClass('current-post');
            } else if (btn_id == 'slider-btn-04') {
                $('.part-texts').find('#slide-04').addClass('current-post');
            }
        });

        // banner slider
        $(".banner-slider").slick({
            slidesToShow:1,
            slidesToScroll:1,
            speed: 500,    
            centerMode: true,
            dots: false,
            draggable: true,
            centerPadding: '0',
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });

        // modal video
        $(".js-video-button").modalVideo({
			youtube:{
				controls:0,
				nocookie: true
			}
        });


        // testimonial slider
        $(".testi-text-slider").slick({
            autoplay: true,
            speed: 1000,
            arrows: true,
            asNavFor: ".testi-user-slider",
            infinite: true
        });
        $(".testi-user-slider").slick({
            slidesToShow:3,
            slidesToScroll:1,
            speed: 1000,    
            asNavFor: ".testi-text-slider",
            centerMode: true,
            dots: false,
            draggable: false,
            centerPadding: '0',
            infinite: true
        });

        

        // fixed navbar
        $(window).on('scroll', function(){
            var headerSection = $('.header');
            var backToTopBtn = $('.back-to-top-btn a');

            if ($(window).scrollTop() > 1500) {
                backToTopBtn.addClass('active');
            } else {
                backToTopBtn.removeClass('active');
            }
            
        });
    });


}(jQuery));	
