let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");
let inventory = document.getElementById("inventory");
let itemsList = document.getElementById("items");

let inventoryItems = [];

function chooseOption(choice) {
    // Limpar as opções antigas
    choices.innerHTML = '';

    // Caminho da esquerda (Cenário do tesouro)
    if (choice === 1) {
        storyText.innerHTML = "Você escolheu o caminho da esquerda. O caminho é estreito e sinuoso. De repente, você encontra um tesouro! Mas algo está se movendo perto do tesouro...";
        choices.innerHTML = `
            <button onclick="chooseOption(4)">Investigar o tesouro</button>
            <button onclick="chooseOption(5)">Ignorar e continuar</button>
            <button onclick="chooseOption(6)">Fugir rapidamente</button>
        `;
    } 
    // Escolhas adicionais após o caminho da esquerda
    else if (choice === 4) {
        storyText.innerHTML = "Você decide investigar o tesouro. Para sua surpresa, uma criatura mágica aparece! Ela oferece um pacto.";
        choices.innerHTML = `
            <button onclick="chooseOption(21)">Aceitar o pacto</button>
            <button onclick="chooseOption(22)">Recusar e correr</button>
            <button onclick="chooseOption(23)">Tentar negociar com ela</button>
        `;
    } 
    else if (choice === 5) {
        storyText.innerHTML = "Você decide ignorar o tesouro e seguir em frente. De repente, uma tempestade se aproxima!";
        choices.innerHTML = `
            <button onclick="chooseOption(24)">Procurar abrigo na floresta</button>
            <button onclick="chooseOption(25)">Continuar caminhando sob a chuva</button>
            <button onclick="chooseOption(26)">Voltar ao ponto de início</button>
        `;
    } 
    else if (choice === 6) {
        storyText.innerHTML = "Você tenta fugir rapidamente, mas tropeça e cai em uma armadilha!";
        choices.innerHTML = `
            <button onclick="chooseOption(27)">Usar a faca do inventário para cortar as cordas</button>
            <button onclick="chooseOption(28)">Tentar escapar sem armas</button>
            <button onclick="chooseOption(29)">Chamar por ajuda</button>
        `;
    }

    // Caminho do meio (Rumo ao rio)
    else if (choice === 7) {
        storyText.innerHTML = "Você nada através do rio e chega do outro lado, mas agora precisa escalar uma montanha íngreme.";
        choices.innerHTML = `
            <button onclick="chooseOption(15)">Escalar a montanha com cuidado</button>
            <button onclick="chooseOption(16)">Tentar escalar rapidamente, sem cuidados</button>
            <button onclick="chooseOption(30)">Procurar por uma rota alternativa ao redor da montanha</button>
        `;
    } 
    else if (choice === 8) {
        storyText.innerHTML = "Você decide construir uma jangada e atravessar o rio com segurança. No entanto, algo surge nas águas...";
        choices.innerHTML = `
            <button onclick="chooseOption(17)">Investigar o que está surgindo nas águas</button>
            <button onclick="chooseOption(18)">Tentar escapar nadando</button>
            <button onclick="chooseOption(31)">Descer o rio em busca de uma vila</button>
        `;
    } 
    else if (choice === 9) {
        storyText.innerHTML = "Você volta para o início da jornada e decide tentar um novo caminho.";
        choices.innerHTML = `
            <button onclick="chooseOption(1)">Escolher novamente o caminho da esquerda</button>
            <button onclick="chooseOption(2)">Escolher novamente o caminho do meio</button>
            <button onclick="chooseOption(3)">Escolher novamente o caminho da direita</button>
        `;
    }

    // Caminho da direita (Caverna misteriosa)
    else if (choice === 10) {
        storyText.innerHTML = "Você entra na caverna e encontra um grande fogo. No centro da caverna, há um grande baú de tesouro!";
        choices.innerHTML = `
            <button onclick="chooseOption(19)">Abrir o baú</button>
            <button onclick="chooseOption(20)">Explorar mais a caverna</button>
            <button onclick="chooseOption(32)">Acender uma fogueira e descansar</button>
        `;
    } 
    else if (choice === 11) {
        storyText.innerHTML = "Você decide explorar os arredores e encontra uma pequena cabana com uma fogueira acesa. Parece ser um bom lugar para descansar.";
        choices.innerHTML = `
            <button onclick="chooseOption(33)">Entrar na cabana</button>
            <button onclick="chooseOption(34)">Ignorar a cabana e seguir viagem</button>
            <button onclick="chooseOption(35)">Procurar por mais sinais de vida na floresta</button>
        `;
    } 
    else if (choice === 12) {
        storyText.innerHTML = "Você decide voltar atrás e começar novamente sua jornada.";
        choices.innerHTML = `
            <button onclick="chooseOption(1)">Escolher novamente o caminho da esquerda</button>
            <button onclick="chooseOption(2)">Escolher novamente o caminho do meio</button>
            <button onclick="chooseOption(3)">Escolher novamente o caminho da direita</button>
        `;
    }

    // Novas opções de decisões e aleatoriedade
    else if (choice === 21) {
        storyText.innerHTML = "Você aceita o pacto da criatura, que lhe oferece uma habilidade mágica. Agora você pode ver além das árvores e localizar itens escondidos!";
        choices.innerHTML = `
            <button onclick="chooseOption(36)">Usar sua habilidade para procurar um mapa antigo</button>
            <button onclick="chooseOption(37)">Usar a habilidade para procurar uma saída da floresta</button>
            <button onclick="chooseOption(38)">Tentar entender mais sobre os poderes da criatura</button>
        `;
    } 
    else if (choice === 22) {
        storyText.innerHTML = "Você recusa o pacto da criatura, e ela fica furiosa, lançando uma maldição sobre você!";
        choices.innerHTML = `
            <button onclick="chooseOption(39)">Tentar desfazer a maldição com magia</button>
            <button onclick="chooseOption(40)">Fugir imediatamente</button>
            <button onclick="chooseOption(41)">Desafiar a criatura para uma luta</button>
        `;
    } 
    else if (choice === 23) {
        storyText.innerHTML = "Você tenta negociar com a criatura, oferecendo uma parte do tesouro em troca de sua ajuda. Ela concorda e lhe dá um feitiço de proteção.";
        choices.innerHTML = `
            <button onclick="chooseOption(42)">Usar o feitiço para explorar um novo caminho na floresta</button>
            <button onclick="chooseOption(43)">Voltar e continuar sua jornada sem a ajuda da criatura</button>
            <button onclick="chooseOption(44)">Procurar mais pistas sobre o tesouro</button>
        `;
    }

    // Caso o jogador escolha algum dos outros caminhos ou finais...
    else if (choice === 24) {
        storyText.innerHTML = "Você encontra abrigo na floresta e, enquanto se acomoda, encontra uma chave misteriosa no chão.";
        inventoryItems.push("Chave Misteriosa");
        choices.innerHTML = `
            <button onclick="chooseOption(45)">Usar a chave para tentar abrir um baú antigo encontrado anteriormente</button>
            <button onclick="chooseOption(46)">Guardar a chave e continuar explorando</button>
            <button onclick="chooseOption(47)">Descansar e esperar que a tempestade passe</button>
        `;
    }
    else if (choice === 25) {
        storyText.innerHTML = "Você decide continuar caminhando sob a chuva e logo encontra uma clareira onde um arco-íris surge.";
        choices.innerHTML = `
            <button onclick="chooseOption(48)">Seguir o arco-íris e procurar uma saída</button>
            <button onclick="chooseOption(49)">Descansar e aproveitar o momento</button>
            <button onclick="chooseOption(50)">Investigar uma caverna próxima ao arco-íris</button>
        `;
    }

    // Você pode continuar criando novas ramificações com base nas escolhas!
}

// Função para encerrar o jogo com uma mensagem de fim
function endGame() {
    storyText.innerHTML = "A aventura chegou
