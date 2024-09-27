let currentQuestion = 1; // Variável que armazena o número da pergunta atual, iniciando em 1
let pontos = 0; // Variável que armazena a pontuação do usuário, iniciando em 0

// Função que inicia o quiz, escondendo a história e mostrando a primeira pergunta
function começarQuiz() {
    document.getElementById("historia").style.display = "none"; // Esconde o elemento com id "historia"
    document.getElementById("quiz").style.display = "block"; // Mostra o elemento com id "quiz"
    mostrarPergunta(currentQuestion); // Chama a função para exibir a pergunta atual
}

// Função que exibe uma pergunta específica e esconde as demais
function mostrarPergunta(pergunta) {
    const todasPerguntas = document.querySelectorAll(".question"); // Seleciona todas as perguntas com a classe "question"
    todasPerguntas.forEach((q) => {
        q.style.display = "none"; // Esconde todas as perguntas
    });
    document.getElementById(`pergunta${pergunta}`).style.display = "block"; // Mostra a pergunta correspondente ao número passado
}

// Função que processa a resposta e avança para a próxima pergunta
function proximaPergunta(perguntaAtual) {
    const respostaSelecionada = document.getElementById(`question${perguntaAtual}`).value; // Obtém o valor da resposta selecionada na pergunta atual

    // Avalia a resposta e atribui pontos dependendo do valor
    switch (perguntaAtual) {
        case 1:
            pontos += (respostaSelecionada === "amizade") ? 20 : 10; // Se a resposta for "amizade", ganha 20 pontos; senão, 10
            break;
        case 2:
            pontos += (respostaSelecionada === "voar") ? 20 : 10;
            break;
        case 3:
            pontos += (respostaSelecionada === "fogo") ? 20 : 10;
            break;
        case 4:
            pontos += (respostaSelecionada === "montanha") ? 20 : 10;
            break;
        case 5:
            pontos += (respostaSelecionada === "voo") ? 20 : 10;
            break;
        case 6:
            pontos += (respostaSelecionada === "forca") ? 20 : 10;
            break;
        case 7:
            pontos += (respostaSelecionada === "dragao") ? 20 : 10;
            break;
        case 8:
            pontos += (respostaSelecionada === "enfrentar") ? 20 : 10;
            break;
        case 9:
            pontos += (respostaSelecionada === "lenda") ? 20 : 10;
            break;
        case 10:
            pontos += (respostaSelecionada === "caverna") ? 20 : 10;
            break;
    }

    // Se ainda houver mais perguntas, mostra a próxima; caso contrário, calcula o resultado final
    if (perguntaAtual < 10) {
        mostrarPergunta(perguntaAtual + 1); // Exibe a próxima pergunta
    } else {
        calcularResultado(); // Calcula e exibe o resultado final
    }
}

// Função que calcula e exibe o resultado final
function calcularResultado() {
    document.getElementById("quiz").style.display = "none"; // Esconde o elemento do quiz
    document.getElementById("resultado").style.display = "block"; // Mostra o elemento de resultado

    // Exibe a pontuação final
    document.getElementById("resultadoFinal").textContent = "Sua pontuação final é: " + pontos;

    // Define a imagem de resultado com base na pontuação do usuário
    const imagem = document.getElementById("resultadoImagem");
    if (pontos >= 120) {
        imagem.src = "img/dragao.jpg"; // Exibe imagem de dragão se a pontuação for 120 ou mais
        imagem.alt = "Você é Zephyros!"; // Texto alternativo descrevendo o resultado
    } else {
        imagem.src = "img/viking.jpeg"; // Exibe imagem de viking se a pontuação for menor que 120
        imagem.alt = "Você é Kael!"; // Texto alternativo descrevendo o resultado
    }
}

// Função que reinicia o quiz recarregando a página
function reiniciarQuiz() {
    window.location.reload(); // Recarrega a página para reiniciar o quiz
}
