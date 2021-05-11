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

// viewport items
const mainItems = document.querySelectorAll("#appear_itm");

const mainIsInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -200 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 50 &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + 100
  );
};

const mainRun = () => {
  mainItems.forEach((item) => {
    if (mainIsInViewport(item)) {
      item.classList.add("main_show");
    }
  });
};

//Trigger Events
window.addEventListener("load", mainRun);
window.addEventListener("resize", mainRun);
window.addEventListener("scroll", mainRun);
