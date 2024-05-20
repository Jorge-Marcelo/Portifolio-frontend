const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink) {
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function () {
instagram(instgramLink);
});

const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink) {
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function () {
threads(threadsLink);
});

const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink) {
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function () {
linkedin(linkedinLink);
});

const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink) {
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function () {
github(githubLink);
});

const curriculoLink =
"https://drive.google.com/file/d/11cx44eraMtCmqwnHdp_y28HkVO-of7j9/view";

const CVButton = document.getElementById("curriculo");
function curriculo(curriculoLink) {
const newTableCV = window.open(curriculoLink, "_blank");
newTableCV.focus();
}

CVButton.addEventListener("click", function () {
curriculo(curriculoLink);
});

const WhatsappLink = "https://api.whatsapp.com/send?phone=5521976174183";

const WhatsappButton = document.getElementById("Whatsapp");
function Whatsapp(WhatsappLink) {
const newTableWhatsapp = window.open(WhatsappLink, "_blank");
newTableWhatsapp.focus();
}

WhatsappButton.addEventListener("click", function () {
Whatsapp(WhatsappLink);
});
