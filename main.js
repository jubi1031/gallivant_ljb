const $ham = document.querySelector('.ham');
const $gnb = document.querySelector('.gnb');
const $outside = document.querySelector('.outside');
const $li = $gnb.querySelectorAll('li');
const $aLink = $gnb.querySelectorAll('a');

$ham.addEventListener('click', (e) => {
  e.preventDefault();
  $gnb.classList.toggle('on');
  $outside.classList.toggle('on');
  $li.forEach((el) => {
    el.classList.remove('on');
  });
});

$gnb.addEventListener('click', (e) => {
  let closestA = e.target.closest('a');
  let closestLI = e.target.closest('li');

  if (!closestA) return;

  if (closestA.parentElement.parentElement === $gnb) {
    e.preventDefault();
  } else {
    $li.forEach((el) => {
      el.classList.remove('on');
    });
    $gnb.classList.remove('on');
    $outside.classList.remove('on');
  }

  $li.forEach((el) => {
    if (el != closestLI) {
      el.classList.remove('on');
    }
  });

  if (closestLI) {
    closestLI.classList.toggle('on');
  }
});

var categorySlide = new Swiper('.categorySlide', {
  // slidesPerView: 3,
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: '.pg1',
    clickable: true,
  },
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
});

let instaSlide = new Swiper('.instaSlide', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  //slidesPerView: auto,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
});
