$(function(){
            var workslistnum = 0;
            var winwidth = $(window).width();
            //var worksboxindex = $(".worksbox").index();
            $(".worksbox").eq(0).addClass('workson');
            $(".worksscreenbox").eq(0).addClass('worksscreenon');
            $(".worksscreenboxtext p a").eq(0).addClass("linkon");
            $(window).scroll(function(){
                windowtop = $(window).scrollTop();
                if(windowtop >= $("#section3").offset().top - 300){
                    $(".workstext_text").addClass("workstexton");
                    
                    $("#works_screenbox").addClass("worksscreenon");
                    $("#workslist").addClass("worksliston");
                }
                
                if(winwidth <= 880){
                    $("#works_screenbox").removeClass("worksscreenon");
                    $("#workslist").removeClass("worksliston");
                    
                    $("#workslist").addClass("worksliston880");
                    $("#works_screenbox").addClass("worksscreenon880");
                }
            });
            
            $("#workslistdownbtn").on("click",function(){
                workslistnum ++;
                $("#workslistupbtn").css({"display":"block"});
                $("#works_movebox").animate({"top":"-=300px"},700);
                $(".worksbox").removeClass('workson');
                $(".worksbox").eq(workslistnum).addClass('workson');
                $(".worksscreenbox").removeClass('worksscreenon');
                $(".worksscreenbox").eq(workslistnum).addClass('worksscreenon');
                $(".worksscreenboxtext p a").removeClass("linkon");
                $(".worksscreenboxtext p a").eq(workslistnum).addClass("linkon");
                
                if(workslistnum == 7){
                    $("#workslistdownbtn").css({"display":"none"});
                }
            });
            $("#workslistupbtn").on("click",function(){
                workslistnum --;
                $("#workslistdownbtn").css({"display":"block"});
                $("#works_movebox").animate({"top":"+=300px"},700);
                $(".worksbox").removeClass('workson');
                $(".worksbox").eq(workslistnum).addClass('workson');
                $(".worksscreenbox").removeClass('worksscreenon');
                $(".worksscreenbox").eq(workslistnum).addClass('worksscreenon');
                $(".worksscreenboxtext p a").removeClass("linkon");
                $(".worksscreenboxtext p a").eq(workslistnum).addClass("linkon");
                
                if(workslistnum == 0){
                    $("#workslistupbtn").css({"display":"none"});
                }
            });
            
            //var worksboxindex = 0;
            var worksboxmovepos = 0;
            $(".worksbox").on("click",function(){
                workslistnum = $(this).index();
                worksboxmovepos = workslistnum * (-300) + 150 + "px";
                $("#works_movebox").stop().animate({"top":worksboxmovepos},700);
                
                $(".worksbox").removeClass('workson');
                $(this).addClass('workson');
                $(".worksscreenbox").removeClass('worksscreenon');
                $(".worksscreenbox").eq(workslistnum).addClass('worksscreenon');
                $(".worksscreenboxtext p a").removeClass("linkon");
                $(".worksscreenboxtext p a").eq(workslistnum).addClass("linkon");
                
                $(".worksbox").first().on("click",function(){
                    $("#workslistupbtn").css({"display":"none"});
                });
                $(".worksbox").last().on("click",function(){
                    $("#workslistdownbtn").css({"display":"none"});
                });
            });
            $(".worksbox").not($(".worksbox").eq(0)).on("click",function(){
                $("#workslistupbtn").css({"display":"block"});
            });
            $(".worksbox").not($(".worksbox").last()).on("click",function(){
                $("#workslistdownbtn").css({"display":"block"});
            });
        });