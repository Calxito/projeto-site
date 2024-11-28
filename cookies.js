// Obtenha elementos DOM
const msgCookies = document.getElementById("cookies-msg");
const msgPolitica = document.getElementById("politica-msg");
const aceitarCookiesBtn = document.getElementById("aceitar-cookies"); // Adicionei esta linha

// Função para definir um cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

// Função para obter um cookie
function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(";");
  for (let c of cookies) {
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}

// Função para aceitar cookies
function aceitar() {
  setCookie("lgpd", "sim", 365);
  msgCookies.classList.remove("mostrar");
  localStorage.setItem("cookiesAccepted", "true"); // Adicionei esta linha
  msgCookies.style.display = "none"; // Adicionei esta linha
}

// Verificação do cookie ao carregar a página
if (
  getCookie("lgpd") === "sim" ||
  localStorage.getItem("cookiesAccepted") === "true"
) {
  // Ajustei esta linha
  msgCookies.classList.remove("mostrar");
} else {
  msgCookies.classList.add("mostrar");
}

// Funções para abrir e fechar a política
function abrirpolitica() {
  msgPolitica.style.display = "flex";
}

function fecharpolitica() {
  msgPolitica.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === msgPolitica) {
    fecharpolitica();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const cookiesMsg = document.getElementById("cookies-msg");
  const aceitarCookiesBtn = document.getElementById("aceitar-cookies");

  // Verifica se o usuário já aceitou os cookies
  if (!localStorage.getItem("cookiesAccepted")) {
    cookiesMsg.style.display = "block";
  }

  // Ação ao clicar no botão "Aceitar"
  aceitarCookiesBtn.addEventListener("click", aceitar); // Ajustei esta linha
});

// Função para abrir a política de cookies (opcional)
function abrirpolitica() {
  alert("Abrindo a Política de Cookies...");
  // Aqui você pode adicionar lógica para abrir a página de política de cookies
}
