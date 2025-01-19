let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let amigoAdicionado = inputAmigo.value;

  if (amigoAdicionado) {
    amigos.push(amigoAdicionado);
    inputAmigo.value = "";
  } else {
    alert("Por favor, insira um nome.");
  }

  listaAmigos();
}

function listaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}
