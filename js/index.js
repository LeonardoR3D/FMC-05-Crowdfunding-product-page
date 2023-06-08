// Global Variables
const navBarMenuBackground = document.querySelector("#nav-bar-menu-background");
const navBarMenu = document.querySelector("#nav-bar-menu");
const navBarBtnHamburger = document.querySelector("#nav-bar-hamburger");
const navBarBtnCloseMenu = document.querySelector("#nav-bar-close-menu");
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
