$(function(){
    $('.navi>li').mouseenter(function(){
        $('.subNav').stop().slideDown();
    });
    $('.navi>li').mouseleave(function(){
        $('.subNav').stop().slideUp();
    });
});