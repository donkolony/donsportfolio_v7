// const menuToggle = document.querySelector(".navbar__toggle");
// const navMobileContainer = document.querySelector(".navbar__mobile__container");
// const navMobileMenu = document.querySelector(".navbar__mobile__menu");

// // Toggle menu on click
// menuToggle.addEventListener("click", () => {
//   // Toggle rotation for the bars
//   menuToggle.classList.toggle("active");
//   const isMobileContainerVisible =
//     navMobileContainer.classList.contains("active");
//   const isMobileMenuVisible = navMobileMenu.classList.contains("active");

//   if (isMobileContainerVisible && isMobileMenuVisible) {
//     // Hide the menu
//     navMobileContainer.classList.remove("active");
//     navMobileMenu.classList.remove("active");
//     // Show the menu
//   } else {
//     navMobileContainer.classList.add("active");
//     navMobileMenu.classList.add("active");
//   }
// });

const menuToggle = document.querySelector(".navbar__toggle");
const navMobileContainer = document.querySelector(".navbar__mobile__container");
const navMobileMenu = document.querySelector(".navbar__mobile__menu");

// Toggle menu on click
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // Toggle rotation for the bars
  navMobileContainer.classList.toggle("active");
  navMobileMenu.classList.toggle("active");
});
