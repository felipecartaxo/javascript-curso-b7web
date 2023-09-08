const pressButton = () => {
    console.log('Pressed the key!');
};

const holdButton = () => {
    console.log('Held the key!');
};

const releaseButton = () => {
    console.log('Released the key!')
};

// * const input = document.querySelector('input');
// * input.addEventListener('keyup', releaseButton); Seta um evento (que neste caso será o evento de 'soltar a tecla') no 'input'. Neste caso, ao soltar alguma tecla (dentro do input), o evento acontecerá e a função 'releaseButton' será chamada, fazendo com algo seja exibido no console

// * Cuidado ao digitar o nome do evento. Se você colocar 'onkeyup' ou 'keyup()', o evento não será chamado corretamente e nada acontecerá

document.addEventListener('keyup', releaseButton); // * Neste caso, o evento não se limitará apenas ao 'input', mas sim à página inteira