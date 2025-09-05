let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");
let inventory = document.getElementById("inventory");
let itemsList = document.getElementById("items");

let inventoryItems = [];

function choosePath(choice) {
    choices.innerHTML = '';

    if (choice === 1) {
        storyText.innerHTML = "Você entra na Floresta Sombria, onde o ar é denso e a vegetação cresce em todo lugar. De repente, você se depara com uma bifurcação.";
        choices.innerHTML = `
            <button onclick="choosePath(3)">Ir pela trilha da esquerda</button>
            <button onclick="choosePath(4)">Seguir pela trilha da direita</button>
        `;
    } else if (choice === 2) {
        storyText.innerHTML = "Você decide ficar na aldeia e se manter longe da floresta. No entanto, você sente que a aventura vai acabar aqui...";
        choices.innerHTML = `
            <button onclick="endGame()">Fim da aventura</button>
        `;
    } else if (choice === 3) {
        storyText.innerHTML = "Você segue pela trilha da esquerda e encontra uma sombra misteriosa que começa a falar com você.";
        choices.innerHTML = `
            <button onclick="choosePath(5)">Tentar conversar com a sombra</button>
            <button onclick="choosePath(6)">Atacar a sombra</button>
        `;
    } else if (choice === 4) {
        storyText.innerHTML = "Você segue pela trilha da direita e encontra uma caverna trancada, com uma placa dizendo: 'A chave está com o guardião'.";
        choices.innerHTML = `
            <button onclick="choosePath(7)">Buscar o guardião</button>
            <button onclick="choosePath(8)">Desistir e voltar para a trilha da esquerda</button>
        `;
    } else if (choice === 5) {
        storyText.innerHTML = "A sombra lhe oferece um desafio mental. Se você acertar as três perguntas, poderá continuar.";
        choices.innerHTML = `
            <button onclick="choosePath(9)">Aceitar o desafio</button>
            <button onclick="choosePath(10)">Recusar e tentar passar</button>
        `;
    } else if (choice === 6) {
        storyText.innerHTML = "Você derrota a sombra e
