// const elHamburgerMenu = document.querySelector(".header__hamburger");

// const menuIsActive = () => {
//   elHamburgerMenu.classList.toggle("active");
// };

// elHamburgerMenu.addEventListener('click', menuIsActive);

// const navMenu = document.querySelector("#navMenu");

// navMenu.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });


const elHamburgerBtn = document.querySelector(".header__hamburger");

const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
})
