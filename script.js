let slideIndex = 1;
showSlides(slideIndex);

// Hàm để chuyển sang slide tiếp theo mỗi 3 giây
function autoShowSlides() {
  plusSlides(1);
}

// Thiết lập khoảng thời gian để tự động chuyển slide
let autoSlideInterval = setInterval(autoShowSlides, 3000);

function plusSlides(n) {
  showSlides((slideIndex += n));
  // Reset lại khoảng thời gian khi người dùng nhấn nút
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoShowSlides, 3000);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  // Reset time
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoShowSlides, 3000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
