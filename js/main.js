$(document).ready(function () {
    // Activate Carousel
    $(".carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $(".carousel").carousel(0);
    });
    $(".item2").click(function () {
        $(".carousel").carousel(1);
    });
    $(".item3").click(function () {
        $(".carousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $(".carousel").carousel("prev");
    });
    $(".right").click(function () {
        $(".carousel").carousel("next");
    });
    
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

function openNav() {
    document.getElementById("mySideNav").style.width = "15%";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

