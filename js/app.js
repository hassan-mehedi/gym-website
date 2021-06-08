const toggleButton = document.querySelector(".toggle-menu");
const menuBar = document.querySelector(".menu-bar");

toggleButton.addEventListener("click", () => {
    menuBar.classList.toggle("active-menu-bar");
    toggleButton.classList.toggle("active");
});
