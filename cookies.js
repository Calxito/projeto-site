// Função para criar um cookie
function setCookie(nome, valor, dias) {
  const data = new Date();
  data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);
  const expira = "expires=" + data.toUTCString();
  document.cookie = nome + "=" + valor + ";" + expira + ";path=/";
}

// Função para ler um cookie
function getCookie(nome) {
  const nomeIgual = nome + "=";
  const decodificado = decodeURIComponent(document.cookie);
  const ca = decodificado.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nomeIgual) == 0) {
      return c.substring(nomeIgual.length, c.length);
    }
  }
  return "";
}

// Função para apagar um cookie
function apagarCookie(nome) {
  document.cookie = nome + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Exemplo de uso
function exemploCookies() {
  // Criar um cookie
  setCookie("username", "JohnDoe", 30);

  // Ler um cookie
  const user = getCookie("username");
  if (user != "") {
    alert("Bem-vindo de volta, " + user);
  } else {
    alert("Bem-vindo, novo usuário!");
  }

  // Apagar um cookie
  // apagarCookie("username"); // Descomente esta linha para apagar o cookie
}
