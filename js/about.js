$(function(){
    $('.burble').hide();

    $('.about_icon li').hover(function(){
        $(this).find('.burble').stop().fadeIn();
    }, function(){
        $('.burble').stop().hide();
    });
})