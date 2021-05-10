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
