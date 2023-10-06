$(function(){
    // Yes24
    $("#yes24_box").mouseenter(function(){
        $("#yes24 > li").stop().animate({marginTop:"-1232px"},4000)
    }).mouseleave(function(){
        $("#yes24 > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // WV 프로젝트
    $("#wv_box").mouseenter(function(){
        $("#wv > li").stop().animate({marginTop:"-1433px"},4000)
    }).mouseleave(function(){
        $("#wv > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // Happy Egg
    $("#egg_box").mouseenter(function(){
        $("#egg > li").stop().animate({marginTop:"-5083px"},8000)
    }).mouseleave(function(){
        $("#egg > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // 집꾸미기
    $("#house_box").mouseenter(function(){
        $("#house > li").stop().animate({marginTop:"-1095px"},4000)
    }).mouseleave(function(){
        $("#house > li").stop().animate({marginTop:"0px"},3000)
    })
})