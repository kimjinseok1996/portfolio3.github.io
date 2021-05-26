$(function(){
        $(".maintext_text, #maintext_by").addClass("maintexton");
           
        $("#bottomarrow").on("click",function(){
            windowtop = $(window).scrollTop();
            $("body,html").animate({"scrollTop":$("#section2").offset().top},1000);
        });
    });