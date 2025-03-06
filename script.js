const perguntas = [
    {
        pergunta: "1 - Qual tipo de profissional tem mais chances de crescer na empresa?",
        opcoes: [
            "A) O colaborador que só cumpre o básico do seu cargo e não busca evoluir.",
            "B) O colaborador que está sempre aprendendo novas habilidades e entregando além do esperado.",
            "C) O colaborador que evita desafios e prefere ficar na zona de conforto."
        ],
        resposta: "B"
    },
    {
        pergunta: "2 - Quando a empresa tem que escolher entre dois candidatos, qual fator geralmente tem um peso maior?",
        opcoes: [
            "A) Apenas as certificações e diplomas, sem considerar experiência prática.",
            "B) O candidato que pede o menor salário, independentemente da qualificação.",
            "C) Experiência prática, aprendizado contínuo e alinhamento com a cultura da empresa."
        ],
        resposta: "C"
    },
    {
        pergunta: "3 - Qual característica vocês mais valorizam em um profissional de TI na hora da contratação?",
        opcoes: [
            "A) Capacidade de resolver problemas, aprender rápido e se adaptar.",
            "B) Resistência à mudança e preferência por métodos antigos.",
            "C) Apenas um currículo cheio de certificações, sem experiência prática."
        ],
        resposta: "A"
    },
    {
        pergunta: "4 - Que tipo de colaborador tem mais chances de se tornar referência dentro da equipe?",
        opcoes: [
            "A) O profissional que compartilha conhecimento, propõe soluções e trabalho em equipe.",
            "B) O profissional que faz apenas suas tarefas sem se preocupar com o time.",
            "C) O profissional que esconde conhecimento para não ajudar os colegas."
        ],
        resposta: "A"
    },
    {
        pergunta: "5 - Para um profissional de TI conseguir se destacar na empresa e ser promovido, o que mais conta?",
        opcoes: [
            "A) Reclamar que merece uma promoção sem demonstrar crescimento profissional.",
            "B) Apenas cumprir o que está na descrição do cargo e esperar reconhecimento.",
            "C) Proatividade, aprendizado constante e contribuição para os resultados do time."
        ],
        resposta: "C"
    },
    {
        pergunta: "6 - Qual tipo de profissional em transição de carreira tem mais chances de conseguir uma oportunidade na sua empresa?",
        opcoes: [
            "A) O profissional que apenas fez um curso, mas não demonstra esforço para adquirir experiência prática.",
            "B) O profissional que, mesmo sem experiência na área, está sempre estudando, desenvolvendo projetos práticos e buscando aplicar o que aprende.",
            "C) O profissional que espera primeiro conseguir um emprego para só então começar a aprender e se desenvolver"
        ],
        resposta: "B"
    },

];

const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-btn");

let perguntaAtual = 0;

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    quizContainer.innerHTML = `
        <h2>${pergunta.pergunta}</h2>
        ${pergunta.opcoes.map((opcao, index) => `
            <label>
                <input type="radio" name="resposta" value="${String.fromCharCode(65 + index)}">
                ${opcao}
            </label><br>
        `).join("")}
    `;
}

function verificarResposta() {
    const selecionado = document.querySelector('input[name="resposta"]:checked');
    if (!selecionado) {
        alert("Selecione uma resposta!");
        return;
    }

    if (selecionado.value === perguntas[perguntaAtual].resposta) {
        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
           window.location.href = "redes.html"; 
        }
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

nextButton.addEventListener("click", verificarResposta);

// Carrega a primeira pergunta ao iniciar
document.addEventListener("DOMContentLoaded", carregarPergunta);