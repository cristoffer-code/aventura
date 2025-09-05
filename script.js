document.addEventListener('DOMContentLoaded', () => {
    const enigma = document.getElementById('enigma-1');

    enigma.addEventListener('click', () => {
        // Enigma: A soma das 4 cores primárias. (red, blue, yellow, green)
        const respostaCorreta = '4';
        const respostaUsuario = prompt("Qual a soma das 4 cores primárias?");

        if (respostaUsuario === respostaCorreta) {
            alert('Resposta correta! O caminho foi revelado.');
            enigma.style.backgroundColor = '#2ecc71';
            enigma.textContent = 'Caminho Liberado';
            enigma.style.cursor = 'default';
        } else {
            alert('Resposta incorreta. Tente novamente.');
            enigma.style.backgroundColor = '#c0392b';
        }
    });
});