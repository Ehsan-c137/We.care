"use strict";

const searchDocCloseBtn = document.querySelectorAll(
   ".search-doctor__segested-items-close-btn"
);

searchDocCloseBtn.forEach(function (item) {
   item.addEventListener("click", function () {
      item.closest(".search-doctor__segested-items").remove();
   });
});
