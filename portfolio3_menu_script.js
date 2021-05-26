$(function(){
    var windowtop = 0;
            var sectionheight = $("section").height();
            var pagescrollnum = 1;
            
//            $(window).on("mousewheel DOMMouseScroll", function (event){
//                windowtop = $(window).scrollTop();
//
//              if (event.originalEvent.deltaY < 0) {
//                  if(pagescrollnum > 1){
//                      pagescrollnum --;
//                  }                                
//                  windowtop =$("#section"+pagescrollnum).offset().top;
//                  $("body, html").stop().animate({"scrollTop": windowtop},1000);
//              }
//              else {
//                  if(pagescrollnum < $("section").length){
//                      pagescrollnum ++;
//                  }
//                  windowtop =$("#section"+pagescrollnum).offset().top;
//                  $("body, html").stop().animate({"scrollTop": windowtop},1000);
//              }
//            });
            var menunum = 0;
            $(".mainmenu_menutext p a").hover(function(){
                $(this).parent().siblings(".shadow").addClass("hoveron");
            },function(){
                $(this).parent().siblings(".shadow").removeClass("hoveron");
            });
    
            $(".mainmenu_menutext p a").on("click",function(){
                $("#mainmenu").removeClass("menuon");
                    $("body").css({"overflow-y":"visible"});
                    
                    $("#topmenubar, #bottommenubar").removeClass("menuon");
                   
                    setTimeout(function(){
                        $("#topmenubar").css({"top":"8px"});
                        $("#bottommenubar").css({"top":"28px"});
                        $("#middlemenubar").removeClass("menuon");
                        menunum = 0;
                    },350);   
            });
            
            $("#menubtnbox").on("click",function(){
                if(menunum == 0){
                    menunum=1;
                    
                    $("#mainmenu").addClass("menuon");
                    $("body").css({"overflow-y":"hidden"});
                    
                   $("#topmenubar, #bottommenubar").css({"top":"18px"});
                    $("#middlemenubar").addClass("menuon");
                    
                    setTimeout(function(){
                        $("#topmenubar, #bottommenubar").addClass("menuon");
                        menunum = 2;
                    },350);        
                }
                
                else if(menunum == 2){
                    menunum=1;
                    
                    $("#mainmenu").removeClass("menuon");
                    $("body").css({"overflow-y":"visible"});
                    
                    $("#topmenubar, #bottommenubar").removeClass("menuon");
                   
                    setTimeout(function(){
                        $("#topmenubar").css({"top":"8px"});
                        $("#bottommenubar").css({"top":"28px"});
                        $("#middlemenubar").removeClass("menuon");
                        menunum = 0;
                    },350);   
                }
            });
    });