var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-counter");
  var dots = document.getElementsByClassName("dot");
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
}

function visibleContainer (containerID) {
  var box = document.getElementById(containerID)
  var button = containerID !== 'nav-box-mobile' ? document.getElementById(containerID + '-button') : null
  if (box.className === 'hide') {
    button !== null ? button.innerText = '—': null;
    box.className = 'show'
  }
  else {
    button !== null ? button.innerText = '+': null;
    box.className = 'hide'
  }
  
}