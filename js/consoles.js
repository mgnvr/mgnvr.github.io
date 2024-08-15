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

const swiperAccessories = new Swiper(".swiper--accessories", {
  direction: "horizontal",
  loop: true,
  // autoplay: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination--accessories",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next--switch",
  //   prevEl: ".swiper-button-prev--switch",
  // },
});
