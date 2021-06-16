// Modal
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-modal-close]");
const overlay_modal = document.querySelector(".overlay_modal");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay_modal.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.activated");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("activated");
  overlay_modal.classList.add("activated");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("activated");
  overlay_modal.classList.remove("activated");
}
// Change modal image
const artwork = document.querySelectorAll(".artwork");
const modal_choice = document.querySelectorAll(".modal_choice");
const art_paragraph = document.querySelectorAll(".art_paragraph");

modal_choice.forEach((el) => {
  el.addEventListener("click", () => {
    let attribute = el.getAttribute("src");
    let id = el.getAttribute("id");

    artwork[id].style.opacity = 0;
    art_paragraph[id].style.opacity = 0;
    setTimeout(() => {
      if (el.nodeName === "P") {
        artwork[id].style.display = "none";
        art_paragraph[id].classList.add("show");
      } else {
        art_paragraph[id].classList.remove("show");
        artwork[id].style.display = "flex";
        artwork[id].setAttribute("src", attribute);
      }
      modal_choice.forEach((el) => el.classList.remove("current"));
      el.classList.add("current");

      setTimeout(() => {
        artwork[id].style.opacity = 1;
        art_paragraph[id].style.opacity = 1;
      }, 50);
    }, 300);
  });
});
// viewport items
const items = document.querySelectorAll("#appear");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= -200 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 400 &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + 200
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
