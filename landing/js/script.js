var html = document.querySelector("html");
var body = document.querySelector("body");
var navMain = document.querySelector("#nav");
var navToggle = document.querySelector(".hamburger");
var errorForm = document.querySelector(".pageclip-form__error");
var buttonClose = document.querySelector(".button-close");

navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("is-active");
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    html.classList.add("lock");
    body.classList.add("lock");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    html.classList.remove("lock");
    body.classList.remove("lock");
  }
});

var navElements = document.querySelectorAll(".main-nav__item");

for (var elem of navElements) {
  elem.addEventListener("click", function () {
    console.log("click");
    navToggle.classList.remove("is-active");
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    html.classList.remove("lock");
    body.classList.remove("lock");
  });
}

document.getElementById("year").innerHTML = new Date().getFullYear();

var swipeHand = document.querySelector(".panorama-icon");
var panorama = document.getElementById("panorama");
panorama.addEventListener("mousedown", function () {
  swipeHand.style.display = "none";
});
panorama.addEventListener("touchmove", function () {
  swipeHand.style.display = "none";
});

pannellum.viewer("panorama", {
  type: "equirectangular",
  autoLoad: true,
  compass: false,
  panorama: "assets/photos/driv3r_tour.jpg",
  hfov: 120,
  mouseZoom: false,
  minPitch: 0,
  maxPitch: 0,
  hotSpotDebug: false,
  hotSpots: [
    {
      pitch: 10.65,
      yaw: 157.1,
      type: "info",
      text: "HTC Vive",
    },
    {
      pitch: -16.13,
      yaw: 198.86,
      type: "info",
      text: "Рулевая установка",
    },
    {
      pitch: 25.09,
      yaw: -119.92,
      type: "info",
      text: "PlayStation VR",
    },
    {
      pitch: 22.13,
      yaw: -54.26,
      type: "info",
      text: "PlayStation VR",
    },
    {
      pitch: 15.78,
      yaw: -75.41,
      type: "info",
      text: "PlayStation 5",
    },
    {
      pitch: 11.11,
      yaw: 104.1,
      type: "info",
      text: "PlayStation 5",
    },
    {
      pitch: -13.38,
      yaw: -123,
      type: "info",
      text: "PlayStation 4 Pro",
    },
    {
      pitch: -11.76,
      yaw: -47.83,
      type: "info",
      text: "PlayStation 4 Pro",
    },
    {
      pitch: 0,
      yaw: 0,
      type: "info",
      text: "ТРК Континент",
    },
  ],
});

const swiper = new Swiper(".swiper--photos", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: ["-20%", 0, -1],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
  pagination: {
    el: ".swiper-pagination--photos",
  },
  navigation: {
    nextEl: ".swiper-button-next--photos",
    prevEl: ".swiper-button-prev--photos",
  },
});

const swiperGames = new Swiper(".swiper--games", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination--games",
  },
  navigation: {
    nextEl: ".swiper-button-next--games",
    prevEl: ".swiper-button-prev--games",
  },
});

const swiperHTC = new Swiper(".swiper--htc", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: ["-20%", 0, -1],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
  pagination: {
    el: ".swiper-pagination--htc",
  },
  navigation: {
    nextEl: ".swiper-button-next--htc",
    prevEl: ".swiper-button-prev--htc",
  },
});

const swiperPSVR = new Swiper(".swiper--psvr", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: ["-20%", 0, -1],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
  pagination: {
    el: ".swiper-pagination--psvr",
  },
  navigation: {
    nextEl: ".swiper-button-next--psvr",
    prevEl: ".swiper-button-prev--psvr",
  },
});

const swiperPS5 = new Swiper(".swiper--ps5", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: ["-20%", 0, -1],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
  pagination: {
    el: ".swiper-pagination--ps5",
  },
  navigation: {
    nextEl: ".swiper-button-next--ps5",
    prevEl: ".swiper-button-prev--ps5",
  },
});

DG.FloorsWidget.init({
  container: "2gisWidget",
  width: "100%",
  height: "400px",
  initData: {
    complexId: "3659703978840901",
    options: {
      initialFloor: "3",
      initialFirm: "70000001028584133",
      initialZoom: "20",
      poi: false,
    },
  },
});
