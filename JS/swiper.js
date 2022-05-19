"use strict";

const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: "horizontal",
   slidesPerView: 6,
   // centeredSlides: true,
   // If we need pagination
   // pagination: {
   //    el: ".swiper-pagination",
   // },

   // // And if we need scrollbar
   // scrollbar: {
   //    el: ".swiper-scrollbar",
   // },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 3,
      },
      800: {
         slidesPerView: 4,
      },
      1000: {
         slidesPerView: 6,
      },
   },
});
