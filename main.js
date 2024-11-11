const slides = [...document.querySelectorAll(".slider__item")];
const dots = addDots();

let currentSlide = 0;

document
  .querySelector(".slider__next-btn")
  .addEventListener("click", showNextSlide);
document
  .querySelector(".slider__prev-btn")
  .addEventListener("click", showPrevSlide);

function addDots() {
  const dots = [];
  for (let i = 0; i < slides.length; i += 1) {
    const dot = document.createElement("div");
    dot.classList.add("slider__dot");
    dots.push(dot);
  }

  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => showSlide(index)),
  );

  document.querySelector(".slider__dots").append(...dots);

  return dots;
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function showNextSlide() {
  currentSlide += 1;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide -= 1;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);
