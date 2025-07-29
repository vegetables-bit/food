function filterMenu(category) {
  const items = document.querySelectorAll('.food-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(() => {
  nextSlide();
}, 3000);

showSlide(0);
