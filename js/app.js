// Menu bar toggle

const toggleButton = document.querySelector(".toggle-menu");
const menuBar = document.querySelector(".menu-bar");

toggleButton.addEventListener("click", () => {
    menuBar.classList.toggle("active-menu-bar");
    toggleButton.classList.toggle("active");
});

// Change Navbar Color while scrolling

const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    let y = window.pageYOffset;
    y = parseInt(y);
    if (y > 30) {
        navBar.style.backgroundColor = "#efefef";
    }
    if (y <= 30) {
        navBar.style.backgroundColor = "rgba(239,239,239, 0.5)";
    }
    console.log(y);
});
