"use strict";

// loader for first time open the site
const loaderPage = document.querySelector(".loader");
window.addEventListener("load", function () {
   loaderPage.classList.add("loaderHidden");
});

// header
const header = document.querySelector(".header-container");
window.addEventListener("scroll", function (e) {
   this.pageYOffset > 100
      ? header.classList.add("header-scroll")
      : header.classList.remove("header-scroll");
});

const searchDocCloseBtn = document.querySelectorAll(
   ".search-doctor__segested-items-close-btn"
);

searchDocCloseBtn.forEach(function (item) {
   item.addEventListener("click", function () {
      item.closest(".search-doctor__segested-items").remove();
   });
});

// intersection observer
const obsOption = {
   root: null,
   rootMargin: "0px",
   threshold: 0.45,
};

const obsCallback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("active-animation");
         observer.unobserve(entry.target);
      }
   });
};

let observer = new IntersectionObserver(obsCallback, obsOption);

const animateObs = document.querySelectorAll(".animate-obs");
animateObs.forEach((el) => {
   observer.observe(el);
});
