// var isFullscreen = false;

// function fullscreen(){      
//     var d = {};
//     var speed = 300;
//     if(!isFullscreen){ // MAXIMIZATION
//         d.width = "100%";
//         d.height = "100%"; 
//         isFullscreen = true;
//     }
//     else{ // MINIMIZATION            
//         d.width = "300px";
//         d.height = "100px";            
//         isFullscreen = false;
//     }
//     $(".player").animate(d,speed);            
// }

$(document).ready(function () {
    $('.videoPlayerBtn').on('click', function (e) {
        e.preventDefault();
        let url = $(this).attr('data-url');
        $('.video_player').hide();
        $('.videoLoading').show();

        setTimeout(function () {
            // window.location.href=url;
            $('#video_modal').modal('show');
        }, 2000);
    });

    $('#video_modal').on('hidden.bs.modal', function (e) {
        e.preventDefault();
        $('.videoLoading').hide();
        $('.video_player').show();
    });

    $('.info').on('click', function (e) {
        e.preventDefault();
        var page = $(this).attr('data-page');
        page = page + '.php'
        page_title = $(this).attr('data-title');
        //$("#page_modal").load("http://192.168.0.113/landing_page/dcma.php");
        $('#page_modal').find('.modal-body').load(page, function (data) {
            $('#info_page_title').text(page_title);
            $('#page_modal').modal('show');
        });
        //alert(page);
    });

    $('.player__popup').hide();
    // player__button
    $(document).on('click', '.click_play', function () {
        $('.player__button').css({ 'animation': 'playProgress 5s infinite' });

        setTimeout(function () {
            $('.player__popup').show();
            $('.player__button').css({ 'animation': 'colorSlide 2s infinite' });
        }, 5000);
        
    });

    $(document).on('click', '.cancel_button', function () {
        $('.player__popup').fadeIn(300).hide();
    });
    // sound_icon
    $(document).on('click', '.sound_icon', function () {
        // $('#sound_range').fadeIn(300).toggleClass('d-none');
    });

    // setting_icon
    $(document).on('click', '.setting_icon', function () {
        $(this).toggleClass('rotate_20');
        $('.player__setting-menu').fadeIn(300).toggleClass('d-none');
    });

    $(document).on('click', '.dropdown-item', function () {
        $('.dropdown-item').removeClass('active');
        $(this).toggleClass('active');
        $('.player__setting-menu').toggleClass('d-none');
    });



    // full screen
    $(document).on('click', '.full_screen', function (e) {
        e.preventDefault();
        launchIntoFullscreen(document.getElementById("player"));
    });

    $(document).on('click', '.normal_screen', function (e) {
        e.preventDefault();
        exitFullscreen();
    });
});


function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    $(".full_screen").removeClass("full_screen").addClass("normal_screen");
}
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    $(".normal_screen").removeClass("normal_screen").addClass("full_screen");
}
$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
    e.preventDefault();
    var fullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? true : false;
    if (fullScreen) {
        $(".full_screen").removeClass("full_screen").addClass("normal_screen");
    } else {
        $(".normal_screen").removeClass("normal_screen").addClass("full_screen");
    }
});