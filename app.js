let amigos = [];
let lista = document.getElementById("listaAmigos");

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
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  let tamanhoLista = amigos.length;

  if (amigos.length >= 0) {
    let amigoAleatorio = Math.floor(Math.random() * tamanhoLista);
    let amigoSorteado = amigos[amigoAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigoSorteado;

    const index = amigos.indexOf(amigoSorteado);

    if (index > -1) {
      amigos.splice(index, 1);
    } else {
      alert("Sua lista Acabou");
      resultado.innerHTML = "";
      lista.innerHTML = "";
    }
  }
}
