/* 
    SI ESTÁS LEYENDO ESTO POR QUE TE HAN PEDIDO AYUDA DILES 'QUÉ CABRÓN, LO A ENCRIPTADO', 
    ASÍ SIGUEN PUTEADOS UNOS CUANTOS DÍAS MÁS :)
*/
const secretNumber = '585';
let attempts = 0;

function checkGuess() {
    const userGuessInput = document.getElementById('userGuess');
    const messageElement = document.getElementById('message');
    const attemptCountElement = document.getElementById('attemptCount');

    const userGuess = userGuessInput.value;

        if (userGuess === secretNumber) {
            messageElement.textContent = `¡ENHORABUENA CHICOS! 
            POR FAVOR, PONED POR EL GRUPO EL NÚMERO Y PROCEDEREMOS CON LA RECOMPENSA :)`;
            messageElement.style.color = 'green';
            messageElement.style.margin = '10px';
            userGuessInput.disabled = true;
        } else {
            messageElement.textContent = 'UPS! SEGUID PROBANDO...';
            messageElement.style.color = 'red';
            messageElement.style.margin = '10px';
        }
    }