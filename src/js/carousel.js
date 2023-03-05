const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-container');
console.log(carouselInner.children.HTMLCollection);
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
let cardCount;

function updateCarousel() {
  const width = carousel.clientWidth;
  let itemCount;
  if (width >= 1024) {
    itemCount = 3;
  } else if (width >=450) {
    itemCount = 2;
  } else {
    itemCount = 3;
  }
  cardCount = Math.ceil(carouselInner.children.length / itemCount);
  carouselInner.style.width = `${cardCount * 100}%`;
  carouselInner.style.transform = `translateX(-${currentIndex * 100 / cardCount}%)`;
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / cardCount}%)`;
  }
}

function nextCard() {
  if (currentIndex < cardCount - 1) {
    currentIndex++;
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / cardCount}%)`;
  }
}

updateCarousel();

window.addEventListener('resize', updateCarousel);
prevButton.addEventListener('click', prevCard);
nextButton.addEventListener('click', nextCard);