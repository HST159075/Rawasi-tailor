// ====== HERO SLIDER ======
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.querySelector('.slider-dots');

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}
createDots();

const dots = document.querySelectorAll('.slider-dots .dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = index;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Auto Slide
setInterval(nextSlide, 5000);


// ====== LANGUAGE TOGGLE ======
const langToggle = document.getElementById("langToggle");
const body = document.body;

langToggle.addEventListener("click", () => {
  body.classList.toggle("lang-ar-active");
});


// ====== CURRENT YEAR IN FOOTER ======
document.getElementById("year").textContent = new Date().getFullYear();
