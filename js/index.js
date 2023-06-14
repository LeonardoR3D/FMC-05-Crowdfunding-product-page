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
const modalCards = document.querySelectorAll(".modal-pledges .card--reward");
const mainCards = document.querySelectorAll(".main .card--reward");
const btnsSelectReward = document.querySelectorAll(".main .card--reward .btn");
const modalThanks = document.querySelector("#modal-thanks");
const modalThanksClose = document.querySelector("#modal-thanks-close");
const btnsEnterPledge = document.querySelectorAll(
  ".modal-pledges .card--reward .btn"
);
const inputsEnterPledge = document.querySelectorAll(
  ".modal-pledges .card--reward .reward__input"
);
const totalMoney = document.querySelector("#total-money");
const totalBackers = document.querySelector("#total-backers");
const btnBookmark = document.querySelector("#btn-bookmark");
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
  if (!modalPledges.classList.contains("hidden")) {
    modalPledges.classList.add("hidden");
  }
  if (!modalThanks.classList.contains("hidden")) {
    modalThanks.classList.add("hidden");
  }
}

function checkOption(event) {
  if (
    !event.currentTarget.classList.contains("out-of-stock") &&
    !event.currentTarget.classList.contains("checked")
  ) {
    modalCards.forEach((card) => {
      if (card.classList.contains("checked")) {
        card.classList.remove("checked");
      }
    });
    event.currentTarget.classList.add("checked");
  }
}

function selectReward(btnNumber) {
  openModalPledges();
  let selection = btnNumber + 1;
  modalCards.forEach((card) => {
    if (card.classList.contains("checked")) {
      card.classList.remove("checked");
    }
  });
  modalCards[selection].classList.add("checked");
  setTimeout(() => {
    modalCards[selection].scrollIntoView();
  }, 250);
}

function enterPledge(pledgeIndex) {
  let previusTotalMoney = Number(totalMoney.innerHTML.replaceAll(",", ""));
  let previusTotalBackers = Number(totalBackers.innerHTML.replaceAll(",", ""));
  let newTotalMoney =
    previusTotalMoney + Number(inputsEnterPledge[pledgeIndex].value);
  let newTotalBackers = previusTotalBackers + 1;
  totalMoney.innerHTML = newTotalMoney.toLocaleString("en", {
    useGrouping: true,
  });
  totalBackers.innerHTML = newTotalBackers.toLocaleString("en", {
    useGrouping: true,
  });
  window.scrollTo(0, 0);
  modalPledges.classList.add("hidden");
  setTimeout(() => {
    modalThanks.classList.remove("hidden");
  }, 500);
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
modalCards.forEach((card) => {
  card.addEventListener("click", checkOption);
});
btnsSelectReward.forEach((btn, index) => {
  if (!mainCards[index].classList.contains("out-of-stock")) {
    btn.addEventListener("click", function () {
      selectReward(index);
    });
  }
});
modalThanksClose.addEventListener("click", closeModals);
btnsEnterPledge.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    enterPledge(index);
  });
});
btnBookmark.addEventListener("click", function () {
  btnBookmark.classList.toggle("bookmarked");
});
