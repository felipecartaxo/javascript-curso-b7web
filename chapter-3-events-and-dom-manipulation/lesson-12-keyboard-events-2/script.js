const releaseButton = (e) => { // * Ao chamarmos um evento que é executado a partir de uma função, é possível armazenar vários dados no parâmetro da função, que neste caso é o 'e'
    // * console.log('Released the key!'); console.log(e); Exibe os atributos do objeto 'e'
    // * console.log(e.code); Retorna qual tecla foi pressionada
    // * console.log(e.key); Também retorna qual tecla foi pressionada, mas sem tanta especificidade
    // * console.log(e.shiftKey); Verifica se o Shift foi pressionado juntamente com a tecla

    console.log(`Pressed key ${e.code}`);
    console.log(`"SHIFT" was pressed? ${e.shiftKey}`);
    console.log(`"CTRL" was pressed? ${e.ctrlKey}`); // * Verifica se a tecla Ctrl foi pressionada juntamente
    console.log(`"ALT" was pressed? ${e.altKey}`); // * Verifica se a tecla Alt foi pressionada juntamente
    console.log('----------')
};

const input = document.querySelector('input');
input.addEventListener('keyup', releaseButton);