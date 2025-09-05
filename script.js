let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");
let inventory = document.getElementById("inventory");
let itemsList = document.getElementById("items");

let inventoryItems = [];

function choosePath(choice) {
    // Limpa as opções antigas
    choices.innerHTML = '';

    if (choice === 1) {
        // Entrar na floresta
        storyText.innerHTML = "Você entra na Floresta Sombria, onde o ar é denso e a vegetação cresce em todo lugar. De repente, você se depara com uma armadilha!";
        choices.innerHTML = `
            <button onclick="choosePath(3)">Tentar desarmar a armadilha</button>
            <button onclick="choosePath(4)">Ignorar e seguir em frente</button>
        `;
    } else if (choice === 2) {
        // Ficar na aldeia
        storyText.innerHTML = "Você decide ficar na aldeia e se manter longe da floresta. No entanto, você sente que a aventura vai acabar aqui...";
        choices.innerHTML = `
            <button onclick="endGame()">Fim da aventura</button>
        `;
    } else if (choice === 3) {
        // Tentar desarmar a armadilha
        storyText.innerHTML = "Você consegue desarmar a armadilha com sucesso, mas algo misterioso aparece na sua frente!";
        addItemToInventory("Amuleto mágico");
        choices.innerHTML = `
            <button onclick="choosePath(5)">Seguir em frente</button>
        `;
    } else if (choice === 4) {
        // Ignorar a armadilha
        storyText.innerHTML = "Você decide ignorar a armadilha e seguir seu caminho. No entanto, o chão começa a ceder e você cai em um buraco!";
        choices.innerHTML = `
            <button onclick="choosePath(6)">Tentar escapar</button>
        `;
    } else if (choice === 5) {
        // Seguir em frente
        storyText.innerHTML = "Você encontra um templo antigo onde o tesouro está escondido!";
        choices.innerHTML = `
            <button onclick="choosePath(7)">Abrir o baú do tesouro</button>
        `;
    } else if (choice === 6) {
        // Tentar escapar
        storyText.innerHTML = "Você não consegue escapar do buraco e a aventura termina aqui.";
        choices.innerHTML = `
            <button onclick="endGame()">Fim da aventura</button>
        `;
    } else if (choice === 7) {
        // Abrir o baú do tesouro
        storyText.innerHTML = "Você abre o baú e encontra o tesouro, mas também um guardião de pedra aparece para protegê-lo!";
        choices.innerHTML = `
            <button onclick="endGame()">Fim da aventura</button>
        `;
    }
}

function addItemToInventory(item) {
    inventoryItems.push(item);
    updateInventory();
}

function updateInventory() {
    inventory.classList.remove("hidden");
    itemsList.innerHTML = "";
    inventoryItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        itemsList.appendChild(li);
    });
}

function endGame() {
    storyText.innerHTML = "A aventura acabou. Você retornou à aldeia.";
    choices.innerHTML = `
        <button onclick="restartGame()">Jogar novamente</button>
    `;
}

function restartGame() {
    location.reload();
}
