/*-------------------------------------------------
title       : 메인
Author      : 플랜아이 광주
Create date : 2020-02-14
-------------------------------------------------*/

$(function()
{
    // 비주얼
    const $Slider = $(".visual_list")
    $Slider.on('init ', function(event, slick) {      
        $Slider.find('.slick-current').removeClass('slick-active').addClass('reset-animation');
        setTimeout( function() {
            $Slider.find('.slick-current').removeClass('reset-animation').addClass('slick-active');
        }, 50);
    });   
    $Slider.slick({
        accessibility: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay: true,
        autoplaySpeed: 6000,
        //infinite: true,
        arrows: true,
        appendArrows : '.slider_control .inner',
        dots:true,
        appendDots : '.slider_control .inner',
        //swipe:true,
        pauseOnDotsHover: false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slickPlay: true,
        slickPause: true,
        variablewidth : true,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);"> <span>0'+ (i+1) +'</span> <div class="circle__box"><div class="circle__wrapper circle__wrapper--right"><div class="circle__whole circle__right"></div></div><div class="circle__wrapper circle__wrapper--left"><div class="circle__whole circle__left"></div></div></div></a>';
        },
    });
    
    $('#visual .control_pause').on('click', function () {
        $(this).removeClass('active').siblings("button").addClass('active');
        $Slider.slick('slickPause')
    });
    $('#visual .control_play').on('click', function () {
        $(this).removeClass('active').siblings("button").addClass('active');
        $Slider.slick('slickPlay')
    });


    setTimeout(function()
    {
        $('#visual').addClass('active');

    }, 100);

    // 최근게시물
    $('.latest .group').classtoggle
    ({
        'button'        : '.label a',   // 이벤트 받을 타겟 선택
        'accordion'		: true,		    // active 될 때 형제요소의 반응 여부
    });

    // 팝업
    $('.popup .list').bxSlider
    ({
        controls        : false,
        autoControls    : true,
        auto            : true,
        autoHover       : true
    });

    // 갤러리
    $gallery = $('.gallery .list');

    $gallery.bxSlider
    ({
        pager           : false,
        autoHover       : true,
        maxSlides       : 4,
        minSlides       : 1,
        moveSlides      : 1,
        slideWidth      : 355
    }).destroySlider();

    $(window).on('load resize', function()
    {
        if ( $(window).width() <= 768 )
        {
            $gallery.reloadSlider
            ({
                pager           : false,
                autoHover       : true,
                maxSlides       : 2,
                minSlides       : 1,
                moveSlides      : 1,
                slideWidth      : 295
            });
        }
        else
        {
            $gallery.destroySlider();
            $gallery.find('li').css('width', '');
        }
    });

    
    // 풋배너 슬라이드
    var $footbanner = $('.footbanner .list');

    $footbanner.bxSlider
    ({
        pager       : false,
        auto        : true,
        autoHover   : true,
        maxSlides   : 9,
        minSlides   : 2,
        moveSlides  : 1,
        slideWidth  : 160
    });

});