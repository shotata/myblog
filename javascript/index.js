$(function(){
    $(".bricks").bricks()
});



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



$(function(){
    $('[class^=waku]').hover(
        function(){
            var str = $(this).attr("class"),
                num = str.match(/\d/g).join(""),
                border = 6;

                if(num == 1){
                    border = 12;
                };

            var d = $(".diamond" + num),
                w = d.width() - 2*border,
                h = d.height() - 2*border,
                t = 0 - d.height() / 2 + 2*border,
                l = 0 - d.width() / 2 + 2*border;

            $(".ripple-dia" + num).stop(true).animate({'width':w,'height':h,'top':l,'left':l},'fast');
        },
        function(){
            var str = $(this).attr("class"),
                num = str.match(/\d/g).join(""),
                b = 6;

                if(num == 1){ b = 12;};

            $(".ripple-dia" + num).stop(true).animate({'width':'0','height':'0','top':b,'left':b});
        }
    );
});