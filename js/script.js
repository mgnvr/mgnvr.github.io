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
