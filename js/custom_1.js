$(function(){
    let slideI = 0;
    const slideLength = $('.main_visual ul.slide li').length - 1;
    $('.main_visual ul.slide li').eq(slideI).siblings().hide();
    let inter = setInterval(goSlide, 3000);
    function goSlide() {
        if (slideI < slideLength) {
            slideI++;
        } else {
            slideI = 0;
        }
        rollingSlide();
    }
    function backSlide() {
        if (slideI == 0) {
            slideI = slideLength;
        } else {
            slideI--;
        }
        rollingSlide();
    }

    function rollingSlide() {
        $('.main_visual ul.slide li').eq(slideI).siblings().fadeOut();
        $('.main_visual ul.slide li').eq(slideI).fadeIn();
        $('.main_visual ul.pager li').removeClass('active').eq(slideI).addClass('active');
    }

    $('.pause_play .pause').click(function () {
        clearInterval(inter);
    });
    $('.pause_play .play').click(function () {
        inter = setInterval(goSlide, 5000);
    });

    $('.main_visual .ltrt_btn .right_btn').click(function () {
        //인터벌 없애고
        clearInterval(inter);
        //슬라이드 돌게
        goSlide();
        //인터벌 세팅
        inter = setInterval(goSlide, 5000);
    });
    $('.main_visual .ltrt_btn .left_btn').click(function () {
        //인터벌 없애고
        clearInterval(inter);
        //슬라이드 돌게
        backSlide();
        //인터벌 세팅
        inter = setInterval(goSlide, 5000);
    });
    $('.main_visual ul.pager li').click(function () {
        //인터벌 없애고
        clearInterval(inter);
        slideI = $(this).index();
        rollingSlide();
        //인터벌 세팅
        inter = setInterval(goSlide, 5000);
    });

    $('.langBox li').eq(0).find('i').click(function(){
        $('.langBox li.none').slideToggle();
    })

    /* 맵 이미지 슬라이드시작 */
    let swiper = new Swiper('.map_slide_wrap', { 
        slidesPerView: 3, 
        slidesPerGroup: 3, 
        spaceBetween: 10,
        navigation: {
            nextEl: ".map_content_tit .swiper-button-next",
            prevEl: ".map_content_tit .swiper-button-prev",
          },
    });
    /* 맵 이미지 슬라이드끝 */

});