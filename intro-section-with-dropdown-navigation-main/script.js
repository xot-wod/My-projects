/** @format */
const btn1 = document.querySelector(".button-1");
const btn2 = document.querySelector(".button-2");
const overlay = document.querySelector(".overlay"); // Correct class name typo
const phonenavbar = document.querySelector(".phone-navbar");
const img1 = btn1.querySelector(".arrow-logo");
const img2 = btn2.querySelector(".arrow-logo0");
const showop1 = document.querySelector(".op-1");
const showop2 = document.querySelector(".op-2");
const phonebtn = document.querySelector(".mobile-nav-button");
const phonebtnphoto = document.querySelector(".phone-open-close");
const phoneop0 = document.querySelector(".op-1-phone");
const phoneop1 = document.querySelector(".op-2-phone");

document.addEventListener("click", (e) => {
  // Handle button-1 click
  if (e.target.closest(".button-1")) {
    showop1.classList.toggle("hidden");
    phoneop0.classList.toggle("hidden");
    img1.src = showop1.classList.contains("hidden")
      ? "images/icon-arrow-down.svg"
      : "images/icon-arrow-up.svg";
  } else if (!e.target.closest(".op-1")) {
    showop1.classList.add("hidden");
    phoneop0.classList.add("hidden");
    img1.src = "images/icon-arrow-down.svg";
  }

  // Handle button-2 click
  if (e.target.closest(".button-2")) {
    showop2.classList.toggle("hidden");
    phoneop1.classList.toggle("hidden");
    img2.src = showop2.classList.contains("hidden")
      ? "images/icon-arrow-down.svg"
      : "images/icon-arrow-up.svg";
  } else if (!e.target.closest(".op-2")) {
    showop2.classList.add("hidden");
    phoneop1.classList.add("hidden");
    img2.src = "images/icon-arrow-down.svg";
  }

  // Handle mobile navigation button click
  if (e.target.closest(".mobile-nav-button")) {
    phonenavbar.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    phonebtnphoto.src = phonenavbar.classList.contains("hidden")
      ? "images/icon-menu.svg"
      : "images/icon-close-menu.svg";
  } else if (!e.target.closest(".phone-navbar")) {
    phonenavbar.classList.add("hidden");
    overlay.classList.add("hidden");
    phonebtnphoto.src = "images/icon-menu.svg";
  }
});
