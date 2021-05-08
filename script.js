const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const overlay = document.getElementById("overlay");
const mobile = document.getElementById("mobile");
const exit = document.getElementById("close");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("active");
  mobile.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("active");
  mobile.classList.toggle("active");
});

exit.addEventListener("click", () => {
  overlay.classList.toggle("active");
  mobile.classList.toggle("active");
});
