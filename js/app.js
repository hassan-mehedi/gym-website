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

// Gallery Section: Slide image with it's text content is added

let i = 0;
const images = [];
let time = 3000;
const titleElement = document.querySelector(".imgTitle");
const quoteElement = document.querySelector(".imgQuote");
const writterElement = document.querySelector(".imgWritter");

const title = [
    "Train Both Body & Mind",
    "Leave No Stone Unturned",
    "Live Healthy",
    "Your Life Your Rule",
    "Leave No Stone Unturned",
];

const quotes = [
    "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.",
    "If you think lifting is dangerous, try being weak. Being weak is dangerous.",
    "Things may come to those who wait, but only the things left by those who hustle.",
    "If something stands between you and your success, move it. Never be denied.",
    "If you want something you’ve never had, you must be willing to do something you’ve never done.",
];

const writter = [
    "— Arnold Schwarzenegger",
    "— Bret Contreras",
    "– Abraham Lincoln",
    "— Dwayne ‘The Rock’ Johnson",
    "— Thomas Jefferson",
];

// Image List
images[0] = "/images/slide-img-1.jpg";
images[1] = "/images/slide-img-2.jpg";
images[2] = "/images/slide-img-3.jpg";
images[3] = "/images/slide-img-4.jpg";
images[4] = "/images/slide-img-5.jpg";

// Change Image
function changeImg() {
    document.slide.src = images[i];
    titleElement.innerText = title[i];
    quoteElement.innerText = quotes[i];
    writterElement.innerText = writter[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
