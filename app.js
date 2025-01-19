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
}
