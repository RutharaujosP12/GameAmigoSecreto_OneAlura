// Array para armazenar os amigos
let friends = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();


    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona um nome a lista
    amigos.push(nome);

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de input
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Verificação se há amigos na lista para sortear!
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo disponível para sorteio.</li>";
        return;
    }

    // Seleciona um índice aleatório do array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
