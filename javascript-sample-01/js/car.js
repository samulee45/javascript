var images=["k7_8.jpeg","k7_9.jpeg","k7_10.jpeg"];
        $(function(){
            var i=0;
            $('#background-changer').css('background-image',"url(images/"+images[i]+")");
            setInterval(function(){
                i++; if(i==images.length){
                    i=0;
                }
                $("#background-changer").fadeOut("slow",function(){
                    $(this).css("background-image","url(images/"+images[i]+")");
                    $(this).fadeIn("slow");
                });
            },4000);
        });

        $(function(){
            $(".bl").click(function(){
                $(".tab02-content").css("display","block");
                $(".tab01-content").css("display","none");
                $(".tab03-content").css("display","none");
                $(".tab04-content").css("display","none");
                $(".tab05-content").css("display","none");
                $(".tab06-content").css("display","none");
            });
            $(".na").click(function(){
                $(".tab03-content").css("display","block");
                $(".tab01-content").css("display","none");
                $(".tab02-content").css("display","none");
                $(".tab04-content").css("display","none");
                $(".tab05-content").css("display","none");
                $(".tab06-content").css("display","none");
            });
            $(".wh").click(function(){
                $(".tab04-content").css("display","block");
                $(".tab01-content").css("display","none");
                $(".tab02-content").css("display","none");
                $(".tab03-content").css("display","none");
                $(".tab05-content").css("display","none");
                $(".tab06-content").css("display","none");
            });
            $(".bb").click(function(){
                $(".tab05-content").css("display","block");
                $(".tab01-content").css("display","none");
                $(".tab02-content").css("display","none");
                $(".tab03-content").css("display","none");
                $(".tab04-content").css("display","none");
                $(".tab06-content").css("display","none");
            });
            $(".aa").click(function(){
                $(".tab06-content").css("display","block");
                $(".tab01-content").css("display","none");
                $(".tab02-content").css("display","none");
                $(".tab03-content").css("display","none");
                $(".tab04-content").css("display","none");
                $(".tab05-content").css("display","none");
            });
            $(".gr").click(function(){
                $(".tab01-content").css("display","block");
                $(".tab05-content").css("display","none");
                $(".tab02-content").css("display","none");
                $(".tab03-content").css("display","none");
                $(".tab04-content").css("display","none");
                $(".tab06-content").css("display","none");
            });
        });

        // swiper

        var swiper = new Swiper('.swiper-container');