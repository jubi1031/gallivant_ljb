const $ham = document.querySelector('.ham');
const $gnb = document.querySelector('.gnb');
const $outside = document.querySelector('.outside');
const $li = $gnb.querySelectorAll('li');
const $aLink = $gnb.querySelectorAll('a');
const btnVideo = document.querySelector('.btnVideo');
const videoCurrentTime = document.querySelector('.videoCurrentTime');
const videoDuration = document.querySelector('.videoDuration');
const video = document.querySelector('.watchVideo > video');

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

btnVideo.addEventListener('click', () => {
  videoCurrentTime.textContent = `${video.currentTime}`;
  videoDuration.textContent = `${video.duration}`;
  if (video.paused) {
    video.play();
    video.loop = true;
    btnVideo.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    btnVideo.innerHTML = '<i class="fa-solid fa-play"></i>';
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
  slidesPerView: 3,
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
});
