/** @format */

"use strict";
const showtab = document.querySelectorAll(".tab-buttons"); // fully dynamic if we added anothger tab.
const tabfutures = document.querySelectorAll(".tab-futures");

const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");

for (let i = 0; i < showtab.length; i++) {
  showtab[i].addEventListener("click", function (e) {
    for (let j = 0; j < showtab.length; j++) {
      if (i !== j) {
        showtab[j].classList.remove("active");
        tabfutures[j].classList.add("hidden");
      }
    }
    showtab[i].classList.add("active");
    tabfutures[i].classList.remove("hidden");
  });
}
