var categorySlide = new Swiper('.categorySlide', {
  slidesPerView: 3,
  //slidesPerView: 6,
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
