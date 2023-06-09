// Global Variables
const navBarMenuBackground = document.querySelector("#nav-bar-menu-background");
const navBarMenu = document.querySelector("#nav-bar-menu");
const navBarBtnHamburger = document.querySelector("#nav-bar-hamburger");
const navBarBtnCloseMenu = document.querySelector("#nav-bar-close-menu");
const btnBackProject = document.querySelector("#btn-back-project");
const modalBackground = document.querySelector("#modal-background");
const modalsContainer = document.querySelector("#modals-container");
const modalPledges = document.querySelector("#modal-pledges");
const modalPledgesClose = document.querySelector("#modal-pledges-close");
// .
// .
// .
// .
// .
// .
// .
// ---------------------------------------------------------------------------------------------
// Functions
function openMenu() {
  if (navBarMenuBackground.classList.contains("hidden")) {
    navBarMenuBackground.classList.remove("hidden");
  }
  navBarMenuBackground.classList.add("visible");
  navBarMenu.classList.remove("hidden");
  if (navBarBtnHamburger.classList.contains("visible")) {
    navBarBtnHamburger.classList.remove("visible");
  }
  navBarBtnHamburger.classList.add("hidden");
  if (navBarBtnCloseMenu.classList.contains("hidden")) {
    navBarBtnCloseMenu.classList.remove("hidden");
  }
  navBarBtnCloseMenu.classList.add("visible");
}

function closeMenu() {
  navBarMenuBackground.classList.remove("visible");
  navBarMenuBackground.classList.add("hidden");
  navBarMenu.classList.add("hidden");
  navBarBtnCloseMenu.classList.remove("visible");
  navBarBtnCloseMenu.classList.add("hidden");
  navBarBtnHamburger.classList.remove("hidden");
  navBarBtnHamburger.classList.add("visible");
}

function openModalPledges() {
  if (modalBackground.classList.contains("hidden")) {
    modalBackground.classList.remove("hidden");
  }
  modalBackground.classList.add("visible");
  if (modalsContainer.classList.contains("hidden")) {
    modalsContainer.classList.remove("hidden");
  }
  modalsContainer.classList.add("visible");
  modalPledges.classList.remove("hidden");
}

function closeModals() {
  modalBackground.classList.remove("visible");
  modalBackground.classList.add("hidden");
  modalsContainer.classList.add("hidden");
  modalPledges.classList.add("hidden");
}
// .
// .
// .
// .
// .
// .
// .
// ---------------------------------------------------------------------------------------------
// Events listeners
navBarBtnHamburger.addEventListener("click", openMenu);
navBarBtnCloseMenu.addEventListener("click", closeMenu);
navBarMenuBackground.addEventListener("click", closeMenu);
btnBackProject.addEventListener("click", openModalPledges);
modalPledgesClose.addEventListener("click", closeModals);
modalBackground.addEventListener("click", closeModals);
