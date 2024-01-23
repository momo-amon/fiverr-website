const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("nav .open");
const clocsMenuBtn = document.querySelector("nav .close");

hamburgerBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
});

clocsMenuBtn.addEventListener("click", () => {
  hamburgerBtn.click();
});
