'use strict';

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.querySelectorAll(".banner-carousel-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function navLink(){
  var links = document.querySelectorAll('.main-nav-link');
  links.forEach(function(link){
    link.addEventListener('click', function(){
      links.forEach(function(link){
        link.classList.remove('is-active')
      })
      link.classList.add('is-active')
    })
  })
}
navLink();
