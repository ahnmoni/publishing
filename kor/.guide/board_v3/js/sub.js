$(function(){
    /* xeicon 접근성 */
    $("[class*='xi-']").attr("aria-hidden","true");

    /* faq 아코디언 */
    $(".faq .group > a").on("click", function(){
        $(this).parent().toggleClass("active");
        // 	$(this).parent().toggleClass("active").siblings().removeClass("active");
        return false;
    });
    

    //이메일 입력방식 선택
    $('#email_code').change(function(){
        $("#email_code option:selected").each(function () {
            if($(this).val()== '1'){ //직접입력일 경우
                $("#email_2").val('');                        //값 초기화
                $("#email_2").attr("disabled",false); //활성화
            }else{ //직접입력이 아닐경우
                $("#email_2").val($(this).text());      //선택값 입력
                $("#email_2").attr("disabled",true); //비활성화
            }
        });
    });
    

    /* layer */
    $(".schedule_layer .close").on("click", function(){
        $(this).parent().fadeOut();
    });

    ///* 댓글 열기 */
    //$("div.CommentWrap div.commentList ul li .btn-recomment").on("click", function(){
    //    $(this).parent().toggleClass("active");
    //    return false;
    //});

});
