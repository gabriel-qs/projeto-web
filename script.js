let currentQuestion = 1;
let pontos = 0;

function começarQuiz() {
    document.getElementById("historia").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    mostrarPergunta(currentQuestion);
}

function mostrarPergunta(pergunta) {
    const todasPerguntas = document.querySelectorAll(".question");
    todasPerguntas.forEach((q) => {
        q.style.display = "none";
    });
    document.getElementById(`pergunta${pergunta}`).style.display = "block";
}

function proximaPergunta(perguntaAtual) {
    const respostaSelecionada = document.getElementById(`question${perguntaAtual}`).value;

    // Aumentar pontos com base na resposta
    switch (perguntaAtual) {
        case 1:
            pontos += (respostaSelecionada === "amizade") ? 20 : 10; // Dragão vale mais
            break;
        case 2:
            pontos += (respostaSelecionada === "voar") ? 20 : 10; // Dragão vale mais
            break;
        case 3:
            pontos += (respostaSelecionada === "fogo") ? 20 : 10; // Dragão vale mais
            break;
        case 4:
            pontos += (respostaSelecionada === "montanha") ? 20 : 10; // Dragão vale mais
            break;
        case 5:
            pontos += (respostaSelecionada === "voo") ? 20 : 10; // Dragão vale mais
            break;
        case 6:
            pontos += (respostaSelecionada === "forca") ? 20 : 10; // Dragão vale mais
            break;
        case 7:
            pontos += (respostaSelecionada === "dragao") ? 20 : 10; // Dragão vale mais
            break;
        case 8:
            pontos += (respostaSelecionada === "enfrentar") ? 20 : 10; // Dragão vale mais
            break;
        case 9:
            pontos += (respostaSelecionada === "lenda") ? 20 : 10; // Dragão vale mais
            break;
        case 10:
            pontos += (respostaSelecionada === "caverna") ? 20 : 10; // Dragão vale mais
            break;
    }

    if (perguntaAtual < 10) {
        mostrarPergunta(perguntaAtual + 1);
    } else {
        calcularResultado();
    }
}

function calcularResultado() {
    // Esconde as perguntas e mostra o resultado
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    // Exibe o resultado final
    document.getElementById("resultadoFinal").textContent = "Sua pontuação final é: " + pontos;

    // Define a imagem com base na pontuação
    const imagem = document.getElementById("resultadoImagem");
    if (pontos >= 120) {
        imagem.src = "img/dragao.jpg"; // Substitua pelo caminho da imagem do Zephyros
        imagem.alt = "Você é Zephyros!";
    } else {
        imagem.src = "img/viking.jpeg"; // Substitua pelo caminho da imagem do Kael
        imagem.alt = "Você é Kael!";
    }
}

function reiniciarQuiz() {
    window.location.reload();
}
