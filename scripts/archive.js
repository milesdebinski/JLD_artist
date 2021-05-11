// viewport items
const items = document.querySelectorAll("#appear");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 100 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
};

//Trigger Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
