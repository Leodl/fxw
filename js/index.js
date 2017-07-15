
$(function () {
   /* $("#nav-a>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(500);
        $(this).css("border-bottom", "1px solid #777777");
        $("#nav-a a:eq(0)").removeClass();

    })
    $("#nav-a>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(500);
        $(this).css("border-bottom", "none");
        $("#nav-a a:eq(0)").addClass("activebottom");

    })*/


    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        'navigation': true,
        "verticalCentered": false,

        afterLoad: function (anchorLink, index) {
            // 删掉所有的 animationclass
            $('.section').removeClass('animation');

            // 为当前页添加animationclass
            // 首页 默认执行的速度太快了 还没看到 就执行完毕了 所以延迟一点
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('animation');
            }, 10)

        }


    });


    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 3000);


    $(window).resize(function () {
        autoScrolling();

    });

    function autoScrolling() {
        var $ww = $(window).width();
        if ($ww < 768) {
            $.fn.fullpage.setAutoScrolling(true);
        } else {
            $.fn.fullpage.setAutoScrolling(false);
        }
    }

    //autoScrolling();

    $('.am-slider').flexslider({
        // options
        controlNav: false,
        slideshowSpeed: 3000, //间隔时间

    });


    // 第三屏幕 点击轮播
    function threelunbo() {

        $(".glyphicon-chevron-right").click(function () {
               $(".page1-three-info>ul>li:eq(0)").hide()
               $(".page1-three-info>ul>li:eq(3)").show()
        })

        $(".glyphicon-chevron-left").click(function () {
            $(".page1-three-info>ul>li:eq(3)").hide();
            $(".page1-three-info>ul>li:eq(0)").show()

    });
    }
    threelunbo();


     


})

