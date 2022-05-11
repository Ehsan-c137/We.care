"use strict";

const popularTab = document.querySelector(".popular__items");

popularTab.addEventListener("click", function (e) {
   const activeElement = document.querySelector(".popular__cards-active");

   activeElement.classList.add("hidden");
   activeElement.classList.remove("popular__cards-active");

   const target = e.target.dataset.number;
   const showItem = document.querySelector(`.popular__cards-${target}`);

   showItem.classList.remove("hidden");
   showItem.classList.add("popular__cards-active");
   console.log(target);
   // delete btn active
   const btnActived = document.querySelector(".btn-active");
   btnActived.classList.remove("btn-primery");
   btnActived.classList.remove("btn-active");

   const btnActive = document.querySelector(`.btn-${target}`);
   btnActive.classList.add("btn-primery");
   btnActive.classList.add("btn-active");
});
