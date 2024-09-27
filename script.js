let currentQuestion = 1; // Armazena o número da pergunta atual
let pontos = 0; // Armazena a pontuação do jogador

function começarQuiz() {
    document.getElementById("historia").style.display = "none"; // Esconde a história
    document.getElementById("quiz").style.display = "block"; // Mostra o quiz
    mostrarPergunta(currentQuestion); // Mostra a primeira pergunta
}

// Função que exibe a pergunta atual e esconde as outras
function mostrarPergunta(pergunta) {
    const todasPerguntas = document.querySelectorAll(".question");
    
    // Laço FOR para percorrer todas as perguntas e escondê-las
    for (let i = 0; i < todasPerguntas.length; i++) {
        todasPerguntas[i].style.display = "none"; // Esconde todas as perguntas
    }
    document.getElementById(`pergunta${pergunta}`).style.display = "block"; // Exibe a pergunta atual
}

// Função para passar para a próxima pergunta e aumentar a pontuação
function proximaPergunta(perguntaAtual) {
    const respostaSelecionada = document.getElementById(`question${perguntaAtual}`).value;

    // SWITCH-CASE: Utilizado para verificar em qual pergunta estamos e atribuir pontos com base na resposta
    switch (perguntaAtual) {
        case 1:
            pontos += (respostaSelecionada === "amizade") ? 20 : 10; // Amizade (Dragão) vale mais pontos,,,,,,,, se escolher a resposta "amizade" ganha 20 pontos, se nao escolher, ganha 10
            break;
        case 2:
            pontos += (respostaSelecionada === "voar") ? 20 : 10; // Voar (Dragão) vale mais pontos
            break;
        case 3:
            pontos += (respostaSelecionada === "fogo") ? 20 : 10; // Fogo (Dragão) vale mais pontos
            break;
        case 4:
            pontos += (respostaSelecionada === "montanha") ? 20 : 10; // Montanha (Dragão) vale mais pontos
            break;
        case 5:
            pontos += (respostaSelecionada === "voo") ? 20 : 10; // Voo (Dragão) vale mais pontos
            break;
        case 6:
            pontos += (respostaSelecionada === "forca") ? 20 : 10; // Força (Dragão) vale mais pontos
            break;
        case 7:
            pontos += (respostaSelecionada === "dragao") ? 20 : 10; // Dragão vale mais pontos
            break;
        case 8:
            pontos += (respostaSelecionada === "enfrentar") ? 20 : 10; // Enfrentar (Dragão) vale mais pontos
            break;
        case 9:
            pontos += (respostaSelecionada === "lenda") ? 20 : 10; // Lenda (Dragão) vale mais pontos
            break;
        case 10:
            pontos += (respostaSelecionada === "caverna") ? 20 : 10; // Caverna (Dragão) vale mais pontos
            break;
    }

    //Se ainda houver perguntas, vai para a próxima pergunta; caso contrário, calcula o resultado
    if (perguntaAtual < 10) {
        mostrarPergunta(perguntaAtual + 1);
    } else {
        calcularResultado(); // Calcula o resultado final
    }
}

// Função para calcular o resultado com base na pontuação
function calcularResultado() {
    // Esconde o quiz e exibe o resultado
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    // Exibe a pontuação final
    document.getElementById("resultadoFinal").textContent = "Sua pontuação final é: " + pontos;

    const frase = document.getElementById("fraseResultado");
    const imagem = document.getElementById("resultadoImagem");

    
    if (pontos >= 120) {
        frase.textContent = "Você é Zephyros!";
        imagem.src = "img/dragao.jpg"; 
        imagem.alt = "Imagem do zephyros";
    } else {
        frase.textContent = "Você é Kael!";
        imagem.src = "img/viking.jpeg"; 
        imagem.alt = "Imagem do kael";
    }
}

// Função que reinicia o quiz
function reiniciarQuiz() {
    window.location.reload(); 
}
