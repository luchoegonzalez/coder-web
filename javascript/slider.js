let index = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(changeSlide, 3000);