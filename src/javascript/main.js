'use strict';

/*var group = document.querySelector('.banner-carousel')
var items = document.querySelectorAll('.banner-carousel-item');
var currentIndex = 0;
var timer;

advance()

function advance() {
  clearTimeout(timer)
  var timer = setTimeout(function () {
    if(currentIndex < items.length - 1) {
      move(currentIndex + 1)
    } else {
      move(0)
    }
  }, 1000);
}


function move(newIndex){
  advance()
  if (newIndex > currentIndex) {
    items[currentIndex].style.transform = 'translate(-100%)';
    items[currentIndex].style.display = 'none';
    items[newIndex].style.display = 'block';
  } else {
    items[currentIndex].style.transform = 'translate(-100%)';
    items[currentIndex].style.display = 'none';
    items[newIndex].style.display = 'block';
    items[newIndex].style.transform = 'translate(0)';
  }

  currentIndex = newIndex;
}*/

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
