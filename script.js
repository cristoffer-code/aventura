let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");
let inventory = document.getElementById("inventory");
let itemsList = document.getElementById("items");

let inventoryItems = [];

function chooseOption(choice) {
    // Limpar as opções antigas
    choices.innerHTML = '';

    if (choice === 1) {
        storyText.innerHTML = "Você escolheu o caminho da esquerda. O caminho é estreito e sinuoso. De repente, você encontra um tesouro! Mas algo está se movendo perto do tesouro...";
        choices.innerHTML = `
            <button onclick="chooseOption(4)">Investigar o tesouro</button>
            <button onclick="chooseOption(5)">Ignorar e continuar</button>
            <button onclick="chooseOption(6)">Fugir rapidamente</button>
        `;
    } else if (choice === 2) {
        storyText.innerHTML = "Você escolheu o caminho do meio. A floresta fica mais densa, e você ouve sons estranhos ao redor. Você se depara com um rio!";
        choices.innerHTML = `
            <button onclick="chooseOption(7)">Nadar através do rio</button>
            <button onclick="chooseOption(8)">Construir uma jangada</button>
            <button onclick="chooseOption(9)">Voltar para o início</button>
        `;
    } else if (choice === 3) {
        storyText.innerHTML = "Você escolheu o caminho da direita. Um campo aberto surge à sua frente. No centro, há uma caverna escura, mas o que você vê lá dentro? Um fogo aceso?";
        choices.innerHTML = `
            <button onclick="chooseOption(10)">Entrar na caverna</button>
            <button onclick="chooseOption(11)">Explorar os arredores</button>
            <button onclick="chooseOption(12)">Voltar atrás</button>
        `;
    } else if (choice === 4) {
        storyText.innerHTML = "Você decide investigar o tesouro. Para sua surpresa, era uma armadilha! Você foi preso em uma rede!";
        choices.innerHTML = `
            <button onclick="endGame()">Jogo Finalizado</button>
        `;
    } else if (choice === 5) {
        storyText.innerHTML = "Você decide ignorar o tesouro e seguir em frente. Eventualmente, encontra uma aldeia onde você pode descansar.";
        choices.innerHTML = `
            <button onclick="endGame()">Fim da Aventura</button>
        `;
    } else if (choice === 6) {
        storyText.innerHTML = "Você tenta fugir rapidamente, mas o tesouro começa a brilhar e você fica hipnotizado. O que você faz agora?";
        choices.innerHTML = `
            <button onclick="chooseOption(13)">Tentar pegar o tesouro</button>
            <button onclick="chooseOption(14)">Fugir para sempre</button>
        `;
    } else if (choice === 7) {
        storyText.innerHTML = "Você nada através do rio e chega do outro lado, mas agora precisa escalar uma montanha íngreme.";
        choices.innerHTML = `
            <button onclick="chooseOption(15)">Escalar a montanha</button>
            <button onclick="chooseOption(16)">Voltar para o rio</button>
        `;
    } else if (choice === 8) {
        storyText.innerHTML = "Você decide construir uma jangada e atravessar o rio com segurança. No entanto, algo surge nas águas...";
        choices.innerHTML = `
            <button onclick="chooseOption(17)">Investigar o que está surgindo nas águas</button>
            <button onclick="chooseOption(18)">Tentar escapar nadando</button>
        `;
    } else if (choice === 9) {
        storyText.innerHTML = "Você volta para o início da jornada e tenta uma nova abordagem.";
        choices.innerHTML = `
            <button onclick="chooseOption(1)">Escolher novamente o caminho da esquerda</button>
            <button onclick="chooseOption(2)">Escolher novamente o caminho do meio</button>
            <button onclick="chooseOption(3)">Escolher novamente o caminho da direita</button>
        `;
    } else if (choice === 10) {
        storyText.innerHTML = "Você entra na caverna e encontra um grande fogo. No centro da caverna, há um grande baú de tesouro!";
        choices.innerHTML = `
            <button onclick="chooseOption(19)">Abrir o baú</button>
            <button onclick="chooseOption(20)">Explorar mais a caverna</button>
        `;
    } else if (choice === 11) {
        storyText.innerHTML = "Você decide explorar os arredores e encontra uma pequena cabana com uma fogueira acesa. Parece ser um bom lugar para descansar.";
        choices.innerHTML = `
            <button onclick="endGame()">Fim da Aventura</button>
        `;
    } else if (choice === 12) {
        storyText.innerHTML = "Você decide voltar atrás e começar novamente sua jornada.";
        choices.innerHTML = `
            <button onclick="chooseOption(1)">Escolher novamente o caminho da esquerda</button>
            <button onclick="chooseOption(2)">Escolher novamente o caminho do meio</button>
