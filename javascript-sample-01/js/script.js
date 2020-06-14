// function abc(){
//     document.getElementById("demo").innerHTML = Boolean(10>9);
// }

// $(function(){
//     // $('.text').css("color","red").css('fontSize','50px'); //색,폰트사이즈 바꾸기
// var items=$("li"); //li요소를 모두 선택하여 items에 저장함.
//     $("button").on("click",function(){
//         $("#len").text("저장된 <li>요소의 총 개수는"+items.lenght+"개입니다.");
//     });
// });

// $(function(){
//     var abc = $("li");
//     $('button').click(function(){
//         $('#len').text("저장된 li 요소의 총 개수는"+abc.length+"개 입니다.");

//     });
// });

// $(function(){
//     var abc=$("li");
//     $('button').click(function(){
//         $('#len').append("추가해주세요<br>"); //append는 추가하는것!
//     });
// })

// $(function(){
//     $('button').click(function(){
//         $("#list").append("<li>li요소를 추가하겠습니다.</li>"); //append는 뒤에 추가하는 것 prepend는 앞에 추가하는것.
//     });
// });

//바로 앞에 추가
// $(function(){
//     $("button").on("click",function(){
//         $("#firstRow").before("<tr><td>새로운 행입니다.</td></tr>"); //before 바로 앞 after 바로 뒤
//     });
// });

//target 지정해서 추가하기
// $(function(){
//     // $("button").on("click",function(){
//     //     $("<td>새로운 셀입니다.</td>").insertBefore("#target");
//     //     //before 바로 앞 after 바로 뒤 insertBefore 지정방식 insertAfter
//     // });
//     $("button").on("click",function(){
//         //class가 "content"인 각 요소를 포함하는 새로운 요소를 추가함.
//         $(".content").wrap("<div class='wrapper'></div>");
//     });
// });

//사라졌다가 생겼다가
// $(function(){
//     $('#btn01').click(function(){
//         $('#warp').stop().fadeOut('fast');
//     });
//     $('#btn02').click(function(){
//         $('#warp').stop().fadeIn(1000);
//     });
// });
//옆으로 옮겼다가 돌아오기.
// $(function(){
//     $('#btn01').click(function(){
//         $('#warp').css("left","200px");
//     $('#btn02').click(function(){
//         $('#warp').css("left","0px");
//         });
//     });
// });

$(function(){
    $('#btn01').click(function(){
        $('#warp').slideUp();
    $('#btn02').click(function(){
        $('#warp').slideDown();
    });
    });
});