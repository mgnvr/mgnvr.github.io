const swiperXbox = new Swiper(".swiper--xbox", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination--xbox",
  },
  navigation: {
    nextEl: ".swiper-button-next--xbox",
    prevEl: ".swiper-button-prev--xbox",
  },
});

const swiperSwitch = new Swiper(".swiper--switch", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination--switch",
  },
  navigation: {
    nextEl: ".swiper-button-next--switch",
    prevEl: ".swiper-button-prev--switch",
  },
});

const swiperVideo = new Swiper(".swiper--video", {
  direction: "horizontal",
  loop: true,
  // autoplay: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination--video",
  },
  navigation: {
    nextEl: ".swiper-button-next--video",
    prevEl: ".swiper-button-prev--video",
  },
});

// swiperVideo.on('init', function () {
//   const activeSlide = swiperVideo.slides[swiperVideo.activeIndex];
//   const activeVideo = activeSlide.querySelector('video');
//   if (activeVideo) {
//     activeVideo.play();

//   }
// })


swiperVideo.on('slideChangeTransitionEnd', function () {
  swiperVideo.slides.forEach((slide) => {
    const video = slide.querySelector('video');
    if (video) {
      video.pause();
    }
  });

  const activeSlide = swiperVideo.slides[swiperVideo.activeIndex];
  const activeVideo = activeSlide.querySelector('video');
  if (activeVideo) {
    activeVideo.play();
  }
});
