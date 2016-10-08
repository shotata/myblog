$(function(){
    $(".bricks").bricks()
});



$(function(){
   $(".avoid").each(function(){
        var size = 28;
        var txt = $(this).text();
        var suffix = '…';
        var b = 0;
        for(var i = 0; i < txt.length; i++){
            b += txt.charCodeAt(i) <= 255 ? 0.5 : 1;
            if(b > size){
                txt = txt.substr(0, i) + suffix;
                break;
            }
        }
        $(this).text(txt);
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



$(function() {

    $('[class^=blur]').hover(
        function(){
            var str = $(this).attr("class"),
                num = str.match(/\d/g).join(""),
                w = $(this).width() / 2,
                h = $(this).height() / 2
                radius = 400;

                if(num == 0){
                    radius = 550;
                };

            var t = h - radius/2,
                r = w - radius/2;

            $(".baloon-" + num).animate({'z-index':'0'},{'duration':'1',complete:function(){
                        $(".baloon-" + num).stop().animate({'opacity':'0'})
                    }})
            $('.circle' + num).stop(false,true).animate({'width':radius,'height':radius,'top':t,'right':r},{'duration':'1000',
                complete:function(){
                    $(".circle" + num).stop(true).animate({'opacity':'0'},'fast')
                    $(".caption-" + num).stop(true).animate({'opacity':'.4'})
                    $(".capdata-" + num).stop(true).animate({'opacity':'1'})
                    $(".capmonth-" + num).stop(true).animate({'opacity':'1'})
                    $(".captitle-" + num).stop(true).animate({'opacity':'1'})
                }
            });
        },
        function(){
            var str = $(this).attr("class"),
                num = str.match(/\d/g).join(""),
                w = $(this).width() / 2,
                h = $(this).height() / 2;

            $('.circle' + num).stop().animate({'opacity':'1'},{'duration':'1',
                complete:function(){
                    $(".baloon-" + num).stop(true).animate({'opacity':'1'}).css({'z-index':'3'})
                    $(".caption-" + num).css({'opacity':'0'})
                    $(".capdata-" + num).css({'opacity':'0'})
                    $(".capmonth-" + num).css({'opacity':'0'})
                    $(".captitle-" + num).css({'opacity':'0'})
                    $('.circle' + num).stop().animate({'width':'0','height':'0','top':h,'right':w},'fast');
                }
            });
        }
    );
});


$(document).ready(function(){
        $(".auto-font0").flowtype();
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
