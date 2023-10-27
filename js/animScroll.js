const alvos = document.querySelectorAll("[scroll-anim]");
const animationClass = "animation";

function animScroll() {
const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

alvos.forEach(function (elemento) {
if (windowTop > elemento.offsetTop) {
elemento.classList.add(animationClass);
} else {
elemento.classList.remove(animationClass);
}
});
}

window.addEventListener("scroll", animScroll);
animScroll();
