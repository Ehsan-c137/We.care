"use strict";

const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: "horizontal",
   slidesPerView: 6,
   centeredSlides: true,
   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
   },

   // And if we need scrollbar
   scrollbar: {
      el: ".swiper-scrollbar",
   },
});
