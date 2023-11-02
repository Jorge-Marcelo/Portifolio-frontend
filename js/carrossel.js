let imagemAtual = 0;
let totalImagens = 6;

const imagens = document.querySelectorAll("img");

function proximo() {
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");
imagemAtual = (totalImagens + imagemAtual + 1) % totalImagens;
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");
}

function anterior() {
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");
imagemAtual = (totalImagens + imagemAtual - 1) % totalImagens;
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");
indicador(imagemAtual + 1);
}

document.getElementById("img" + index).classList.add("active");
imagemAtual = index - 1;
