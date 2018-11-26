$(document).ready(function () {
    // Activate Carousel
    $(".carousel").carousel();

    $("#test-carousel").carousel();

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

// OPEN THE LIGHTBOX
function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  // CLOSE THE LIGHTBOX
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // NEXT/PREVIOUS SLIDES
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    // From W3 Schools //
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

//-----OPEN AND CLOSE NAV-----//
// function openNav() {
//     document.getElementById("mySideNav").classList.add("open")
// }

// function closeNav() {
//     document.getElementById("mySideNav").classList.add("close")
// }