const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__wrapper");
const burgerClose = document.querySelector(".burger__close");
const overlay = document.querySelector(".overlay");
const headerBtn = document.querySelector(".header__btn");
const modal = document.querySelector(".modal-form");
const burgerBtn = document.querySelector(".burger__btn");
const modalClose = document.querySelector(".modal-form__close");

burger.addEventListener('click', function() {
  burgerMenu.classList.toggle("burger__wrapper_active");
  overlay.classList.toggle("overlay_active");
});
 
burgerClose.addEventListener('click', function() {
  burgerMenu.classList.remove("burger__wrapper_active");
  overlay.classList.remove("overlay_active");
});

overlay.addEventListener('click', function() {
  burgerMenu.classList.remove("burger__wrapper_active");
  overlay.classList.remove("overlay_active");
  modal.classList.remove("modal-active");
});

headerBtn.addEventListener('click', function() {
  modal.classList.toggle("modal-active");
  overlay.classList.toggle("overlay_active");
});

burgerBtn.addEventListener('click', function() {
  modal.classList.toggle("modal-active");
  // overlay.classList.toggle("overlay_active");
  burgerMenu.classList.remove("burger__wrapper_active");
});

modalClose.addEventListener('click', function() {
  modal.classList.remove("modal-active");
  overlay.classList.remove("overlay_active");
});