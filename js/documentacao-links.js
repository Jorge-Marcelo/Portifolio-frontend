const linkHTML = "https://developer.mozilla.org/en-US/docs/Web/HTML";

const buttonHTML = document.getElementById("html");
function html(linkHTML) {
const newTableHTML = window.open(linkHTML, "_blank");
newTableHTML.focus();
}

buttonHTML.addEventListener("click", function () {
html(linkHTML);
});

const linkCSS = "https://developer.mozilla.org/en-US/docs/Web/CSS";

const buttonCSS = document.getElementById("css");
function css(linkCSS) {
const newTableCSS = window.open(linkCSS, "_blank");
newTableCSS.focus();
}

buttonCSS.addEventListener("click", function () {
css(linkCSS);
});

buttonHTML.addEventListener("click", function () {
html(linkHTML);
});

const linkJS = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

const buttonJS = document.getElementById("js");
function js(linkJS) {
const newTableJS = window.open(linkJS, "_blank");
newTableJS.focus();
}

buttonJS.addEventListener("click", function () {
js(linkJS);
});

const linkGit = "https://git-scm.com/doc";

const buttonGit = document.getElementById("git");
function git(linkGit) {
const newTableGit = window.open(linkGit, "_blank");
newTableGit.focus();
}

buttonGit.addEventListener("click", function () {
js(linkGit);
});
