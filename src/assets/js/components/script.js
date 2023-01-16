const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__wrapper");
const burgerClose = document.querySelector(".burger__close");
const overlay = document.querySelector(".overlay");

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
});