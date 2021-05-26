$(function(){
            var skillbarnum = true;
            var html5num = 0; 
            var css3num = 0;  
            var jsnum = 0;  
            var jqnum = 0;
            $(window).scroll(function(){
                windowtop = $(window).scrollTop();
                if(windowtop >= $("#section2").offset().top - 300){
                    $(".abouttext_text").addClass("abouttexton");
                    
                    setTimeout(function(){
                        $("#section2_certification p").addClass("certitexton");
                        $("#section2_certification p:nth-child(1)").addClass("firstcertitexton");
                    },500);
                    
                    
                    setTimeout(function(){
                        $(".section2_skillsbox").addClass("skillboxon");
                    },1000);
                    
                    
                    if(skillbarnum == true){
                        setTimeout(function(){
                            setInterval(function(){
                            if(html5num < 90){
                                html5num ++;
                                $(".html5bar").animate({"width":90+"%"},1800);
                                $(".html5bartext span").text(html5num);
                            }
                            },20);
                            setInterval(function(){
                                if(css3num < 80){
                                    css3num ++;
                                    $(".css3bar").animate({"width":80+"%"},1800);
                                    $(".css3bartext span").text(css3num);
                                }
                            },20);
                            setInterval(function(){
                                if(jsnum < 60){
                                    jsnum ++;
                                    $(".javascriptbar").animate({"width":60+"%"},1800);
                                    $(".javascriptbartext span").text(jsnum);
                                }
                            },20);
                            setInterval(function(){
                                if(jqnum < 80){
                                    jqnum ++;
                                    $(".jquerybar").animate({"width":80+"%"},1800);
                                    $(".jquerybartext span").text(jqnum);
                                }
                            },20);
                        },1800);
                        
                    }
                    skillbarnum = false;
                }
            });
            
        });