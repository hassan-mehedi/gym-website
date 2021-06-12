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
});

// Gallery Section: Slide image with it's text content is added

const title = [
    "Train Both Body & Mind",
    "Leave No Stone Unturned",
    "Live Healthy",
    "Your Life Your Rule",
    "Do What Is Right",
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

const images = [];

images[0] = "/images/slide-img-1.jpg";
images[1] = "/images/slide-img-2.jpg";
images[2] = "/images/slide-img-3.jpg";
images[3] = "/images/slide-img-4.jpg";
images[4] = "/images/slide-img-5.jpg";

const first = document.slide_one;
const second = document.slide_two;
const third = document.slide_third;
const fourth = document.slide_fourth;
const fifth = document.slide_fifth;

const header_title = document.getElementsByClassName("title");
const quote = document.getElementsByClassName("quote");
const quote_writter = document.getElementsByClassName("writter");

const right_button = document.getElementById("right-arrow-btn");

let counter = 1;

right_button.addEventListener("click", () => {
    if (counter > 4) {
        counter = 1;
    }

    first.src = images[counter >= 5 ? counter - 5 : counter];
    second.src = images[counter + 1 >= 5 ? counter + 1 - 5 : counter + 1];
    third.src = images[counter + 2 >= 5 ? counter + 2 - 5 : counter + 2];
    fourth.src = images[counter + 3 >= 5 ? counter + 3 - 5 : counter + 3];
    fifth.src = images[counter + 4 >= 5 ? counter + 4 - 5 : counter + 4];

    header_title[0].innerText = title[counter >= 5 ? counter - 5 : counter];
    header_title[1].innerText =
        title[counter + 1 >= 5 ? counter + 1 - 5 : counter + 1];
    header_title[2].innerText =
        title[counter + 2 >= 5 ? counter + 2 - 5 : counter + 2];
    header_title[3].innerText =
        title[counter + 3 >= 5 ? counter + 3 - 5 : counter + 3];
    header_title[4].innerText =
        title[counter + 4 >= 5 ? counter + 4 - 5 : counter + 4];

    quote[0].innerText = quotes[counter >= 5 ? counter - 5 : counter];
    quote[1].innerText =
        quotes[counter + 1 >= 5 ? counter + 1 - 5 : counter + 1];
    quote[2].innerText =
        quotes[counter + 2 >= 5 ? counter + 2 - 5 : counter + 2];
    quote[3].innerText =
        quotes[counter + 3 >= 5 ? counter + 3 - 5 : counter + 3];
    quote[4].innerText =
        quotes[counter + 4 >= 5 ? counter + 4 - 5 : counter + 4];

    quote_writter[0].innerText = writter[counter >= 5 ? counter - 5 : counter];
    quote_writter[1].innerText =
        writter[counter + 1 >= 5 ? counter + 1 - 5 : counter + 1];
    quote_writter[2].innerText =
        writter[counter + 2 >= 5 ? counter + 2 - 5 : counter + 2];
    quote_writter[3].innerText =
        writter[counter + 3 >= 5 ? counter + 3 - 5 : counter + 3];
    quote_writter[4].innerText =
        writter[counter + 4 >= 5 ? counter + 4 - 5 : counter + 4];

    counter++;
});

// Pricing Section --> Month <=> Year

const month_button = document.getElementById("month");
const year_button = document.getElementById("year");
const type = document.getElementsByClassName("type");
const price = document.getElementsByClassName("price");

let flag = false;

year_button.addEventListener("click", () => {
    if (flag === false) {
        year_button.style.backgroundColor = "#ea2027";
        year_button.style.color = "#fff";
        month_button.style.backgroundColor = "#fff";
        month_button.style.color = "#231e23";

        for (let i = 0; i < type.length; i++) {
            type[i].innerText = "/year";
            price[i].innerText =
                "$" +
                eval(
                    `${price[i].innerText.substring(1, price[i].length)} * 12`
                );
        }
        flag = true;
    }
});

month_button.addEventListener("click", () => {
    if (flag === true) {
        month_button.style.backgroundColor = "#ea2027";
        month_button.style.color = "#fff";
        year_button.style.backgroundColor = "#fff";
        year_button.style.color = "#231e23";

        for (let i = 0; i < type.length; i++) {
            type[i].innerText = "/month";
            price[i].innerText =
                "$" +
                eval(
                    `${price[i].innerText.substring(1, price[i].length)} / 12`
                );
        }

        flag = false;
    }
});
