const msgCookies = document.getElementById("cookies-msg");
const msgPolitica = document.getElementById("politica-msg");

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let c of cookies) {
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}

function aceitar() {
  setCookie("lgpd", "sim", 365);
  msgCookies.classList.remove("mostrar");
}

if (getCookie("lgpd") === 'sim') {
  msgCookies.classList.remove("mostrar");
} else {
  msgCookies.classList.add("mostrar");
}

function abrirpolitica() {
  msgPolitica.style.display = "flex";
}

function fecharpolitica() {
  msgPolitica.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === msgPolitica) {
    fecharpolitica();
  }
}