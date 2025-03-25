const burger = document.getElementById("burger");
const NavBurger = document.getElementById("Nav-Burger");
const restauName = document.getElementById("Restau-name");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  NavBurger.classList.toggle("active");
  restauName.classList.toggle("active");
});
