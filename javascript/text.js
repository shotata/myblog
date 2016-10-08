
$(document).ready(function(){
    $("#calendar").multipleCalendarCreater({
        fromYear:2016,
        fromMonth:3,
        caption:true,
        weekRowClass:"dow",
        sundayClass:"sun",
        saturdayClass:"sat",
        dyeColumn:{0:"sun", 6:"sat"},
        schedule:{22:"rest", 15:"rest"}
    });
});

$(function(){
    var topBtn = $('.page-top');
    topBtn.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 130){
            topBtn.fadeIn();
        }else{
            topBtn.fadeOut();
        }
    });
    topBtn.click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

