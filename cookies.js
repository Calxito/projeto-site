document.addEventListener("DOMContentLoaded", function () {
  const msgCookies = document.getElementById("cookies-msg");
  const aceitarBtn = document.querySelector(".cookies-btn button");

  if (!localStorage.getItem("cookiesAccepted")) {
    msgCookies.style.display = "block";
  }

  aceitarBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", true);
    msgCookies.style.display = "none";
  });
});

const msgCookies = document.getElementById("cookies-msg");
const msgPolitica = document.getElementById("politica-msg");

function setCookie(nome, valor, dias) {
  const data = new Date();
  data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);
  const expires = `; expires=${data.toUTCString()}`;
  document.cookie = `${nome}=${valor || ""}${expires}; path=/`;
}

function getCookie(nome) {
  const nomeEQ = `${nome}=`;
  const cookies = document.cookie.split(";");
  for (let c of cookies) {
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(nomeEQ) === 0) return c.substring(nomeEQ.length);
  }
  return null;
}

function aceitar() {
  setCookie("lgpd", "sim", 365);
  msgCookies.classList.remove("mostrar");
}

if (getCookie("lgpd") === "sim") {
  msgCookies.classList.remove("mostrar");
} else {
  msgCookies.classList.add("mostrar");
}

function abrirPolitica() {
  msgPolitica.style.display = "flex";
}

function fecharPolitica() {
  msgPolitica.style.display = "none";
}

window.onclick = function (evento) {
  if (evento.target === msgPolitica) {
    fecharPolitica();
  }
};
