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
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  //effect: 'fade',
});
