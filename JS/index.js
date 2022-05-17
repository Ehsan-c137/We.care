"use strict";

// loader for first time open the site
const loaderPage = document.querySelector(".pre-loader");
// window.addEventListener("load", function () {
setTimeout(() => {
   loaderPage.classList.add("pre-loader-hidden");
}, 1000);
// });

// header & go to top
const header = document.querySelector(".header-container");
const goToTopBtn = document.querySelector("#go-to-top");
window.addEventListener("scroll", function (e) {
   if (this.pageYOffset > 100) {
      header.classList.add("header-scroll");
      goToTopBtn.style.opacity = 1;
   } else {
      header.classList.remove("header-scroll");
      goToTopBtn.style.opacity = 0;
   }
});
goToTopBtn.addEventListener("click", function () {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
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
