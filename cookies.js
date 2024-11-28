document.addEventListener("DOMContentLoaded", function () {
  const cookiesMsg = document.getElementById("cookies-msg");
  const politicaMsg = document.getElementById("politica-msg");
  const aceitarBtn = document.querySelector(".cookies-btn button");

  // Exibir o aviso de cookies quando a página carregar
  if (!localStorage.getItem("cookiesAccepted") && getCookie("lgpd") !== "sim") {
    cookiesMsg.classList.add("mostrar");
  }

  aceitarBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", true);
    setCookie("lgpd", "sim", 365);
    cookiesMsg.classList.remove("mostrar");
    alert("Cookies aceitos!");

    // Log para verificação
    console.log(getCookie("lgpd")); // Deve exibir "sim"
    console.log("localStorage:", localStorage.getItem("cookiesAccepted"));
    console.log("Cookie lgpd:", getCookie("lgpd"));
  });

  window.abrirPolitica = function () {
    // Ação para abrir a política de cookies
    politicaMsg.style.display = "flex";
  };

  window.fecharPolitica = function () {
    // Ação para fechar a política de cookies
    politicaMsg.style.display = "none";
  };

  // Função para definir um cookie
  function setCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);
    const expires = `; expires=${data.toUTCString()}`;
    document.cookie = `${nome}=${valor || ""}${expires}; path=/`;
  }

  // Função para obter um cookie
  function getCookie(nome) {
    const nomeEQ = `${nome}=`;
    const cookies = document.cookie.split(";");
    for (let c of cookies) {
      while (c.charAt(0) === " ") c = c.substring(1);
      if (c.indexOf(nomeEQ) === 0) return c.substring(nomeEQ.length);
    }
    return null;
  }

  // Controle de visibilidade da mensagem de cookies
  if (getCookie("lgpd") === "sim") {
    cookiesMsg.classList.remove("mostrar");
  } else {
    cookiesMsg.classList.add("mostrar");
  }

  // Evento para fechar a política de cookies ao clicar fora
  window.onclick = function (evento) {
    if (evento.target === politicaMsg) {
      fecharPolitica();
    }
  };

  // Função para aceitar cookies
  window.aceitar = function () {
    cookiesMsg.style.display = "none";
  };

  // Exibir a mensagem de cookies ao carregar a página
  document.getElementById("cookies-msg").style.display = "block";
});
