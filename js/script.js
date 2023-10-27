const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
navToggle.addEventListener("click", function () {
navMenu.classList.add("show-menu");
navClose.classList.add("navClose");
navToggle.classList.remove("navToggle");
});
}

if (navClose) {
navClose.addEventListener("click", function () {
navMenu.classList.remove("show-menu");
navClose.classList.remove("navClose");
navToggle.classList.add("navToggle");
});
}

const navLink = document.querySelectorAll(".navLink");

const linkAction = function () {
navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
