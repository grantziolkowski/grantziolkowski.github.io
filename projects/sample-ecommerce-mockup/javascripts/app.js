$(document).ready(function() {
    (function initialize() {
        TOTAL_SLIDES = $('#slides').children().length
        CYCLE = 4/ TOTAL_SLIDES * 1000
        FULL_CYCLE = TOTAL_SLIDES * CYCLE
        setInterval(carousel, FULL_CYCLE);
        $(window).scroll(stickSideBar)
        $('.tabs').children().on('click', function(event) {
            tabbedInterface(event)
        })

        $(".count").text("1");
        $('#total').html(TOTAL_SLIDES)
        $('.bottom_slide.active p').html($('#summary1').text())
        $('.bottom_description').html($('.description #description1').text())
    }());

    function pauseCarousel() {
        $('#slides li').css({
            "-webkit-animation-play-state": "paused",
            "-moz-animation-play-state": "paused",
            "-ms-animation-play-state": "paused",
            "-o-animation-play-state": "paused",
            "animation-play-state": "paused"
        })
    }

    function carousel() {
        $('#slides li').css({
            "-webkit-animation-play-state": "running",
            "-moz-animation-play-state": "running",
            "-ms-animation-play-state": "running",
            "-o-animation-play-state": "running",
            "animation-play-state": "running"
        })
        var $current = $('#slides li.active')
        $current.removeClass('active')
        if ($current.is($('#slides li').last())) {
            $('#slides li').first().addClass('active')
            $(".count").html("1")
        } else {
            $current.next().addClass('active')
            $current = $current.next();
            $(".count").html($current.index() + 1)
        }
        setTimeout(pauseCarousel, CYCLE)
    }


    function stickSideBar() {
        if ($(window).scrollTop() > $('#bottom_container').offset().top) {
            $('#right_bar').addClass('stick')
        } else {
            $('#right_bar').removeClass('stick')
        }
    }

    function tabbedInterface(e) {
        e.preventDefault();
        var tabId = e.target.dataset.id
        $('.tabs').children().removeClass('active')
        $('.item_photos').children().removeClass('active')
        $(e.target).addClass('active')
        $(e.target.hash).addClass('active')
        $('.bottom_slide.active p').hide().fadeIn()
        $('.bottom_slide.active p').html($('#summary' + tabId).text())
        $('.bottom_description').hide().fadeIn()
        $('.bottom_description').html($('#description' + tabId).text())
    }

})