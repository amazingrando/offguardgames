// Menu

const handleMenu = () => {
  navSecondary.classList.toggle("show");
};

const menuToggle = document.querySelector(".mobile-menu");
const navSecondary = document.querySelector(".nav-secondary");
menuToggle.addEventListener("click", handleMenu);
