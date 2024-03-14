/* 
    SI ESTÁS LEYENDO ESTO POR QUE TE HAN PEDIDO AYUDA DILES 'QUÉ CABRÓN, LO A ENCRIPTADO', 
    ASÍ SIGUEN PUTEADOS UNOS CUANTOS DÍAS MÁS :)
*/
const secretNumber = '585';

function checkGuess() {
    const userGuessInput = document.getElementById('userGuess');
    const messageElement = document.getElementById('message');
    const shareButton = document.getElementById('shareButton');

    const userGuess = userGuessInput.value;

    if (userGuess === secretNumber) {
        messageElement.textContent = `¡LO CONSEGUÍSTEIS CHICOS! AVISADNOS PARA PROCEDER CON LA RECOMPENSA :)`;
        messageElement.style.color = 'green';
        messageElement.style.margin = '10px';
        userGuessInput.disabled = true;
        document.getElementById('checkButton').style.display = 'none'; // Oculta el botón de comprobar
        shareButton.style.display = 'block'; // Muestra el botón de compartir
    } else {
        messageElement.textContent = 'UPS! SEGUID PROBANDO...';
        messageElement.style.color = 'red';
        messageElement.style.margin = '10px';
    }

    // Desplazar el foco al input después de comprobar el intento
    userGuessInput.focus();
}

function shareOnWhatsApp() {
    const message = encodeURIComponent('¡Lo hemos adivinado! Es el ' + secretNumber + '.¡Queremos la recompensa!'); // Codifica el mensaje
    const url = `https://wa.me/?text=${message}`; // Crea la URL con el mensaje
    window.open(url, '_blank'); // Abre la URL en una nueva ventana
}
