/*-------------------------------------------------
title       : 메인
Author      : 플랜아이 광주
Create date : 2020-03-06
-------------------------------------------------*/

$(function()
{
    // snb 3차 메뉴 가지고 있는 li에 클래스 추가
    $('#snb .list > ul > li').each(function(i)
    {
        if ( $(this).find('ul').length > 0 )
        {
            $(this).addClass('type1');
        }
    });
    
    // snb 3차 메뉴 펼치기
    $('#snb > .list > ul > li > a').on('click', function()
    {
        if ( $(window).width() <= 1280 ){

            if ( $(this).parent('li').hasClass('active') == true )
            {
            	if($('#left_menu_top').hasClass('on') == 1){
            		$('#left_menu_top').removeClass('on');
            	}else{
            		$('#left_menu_top').addClass('on');
            		event.preventDefault();
            	}  
            }
            if($(this).next('ul').find("*").length > 0){
                event.preventDefault();
                $(this).parents('li').siblings('li').removeClass('active');
                $(this).parents('li').addClass('active');	                
                event.stopImmediatePropagation();
            } 

    	}else{

            if ( $(this).next('ul').length > 0 )
            {
                if ( $(this).parent('li').hasClass('active') == false )
                {
                    $(this).parent('li').addClass('active');
                }
                else
                {
                    $(this).parent('li').removeClass('active');
                }

                return false;
            }
        }
    });

    // 탭메뉴(4차) 반응형일 때
    $('.depth4_tab').classtoggle
    ({
        'button'            : '.active a',  // 이벤트 받을 타겟 선택
        'respond'           : true          // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / click 일때만)
    });

    $("#depth4_menu_ul li a").focusin(function() { 
        $(this).parent("li").siblings("li").children('a').children('span').remove(); 
        $(this).append("<span>선택됨</span>"); 
    });
    

    // location 중 list만 메뉴로 사용
    $('.location .list > li').classtoggle
    ({
        'button'        : 'button'   // 이벤트 받을 타겟 선택
    });
    

    // 공유하기
    $('.share').classtoggle();

    $('.print').on("click", function () {
        $('#contents').printThis();
    });


    // 사회적약자 배려 폰트크기 조절
	function getSize() {
        size = $( "html" ).css( "font-size" );
        size = parseInt(size, 20);
      }
    //get inital font size
    getSize();
    $( "#up" ).on( "click", function() {
        // parse font size, if less than 50 increase font size
        if ((size + 2) <= 50) {
            $( "html" ).css( "font-size", "+=2" );
        }
    });
    $( "#down" ).on( "click", function() {
        if ((size - 2) >= 12) {
            $( "html" ).css( "font-size", "-=2" );
        }
    });


    
});