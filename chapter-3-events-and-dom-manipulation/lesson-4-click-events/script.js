// * const clicked = () => alert("Clicou no botão"); */

const clicked = () => { // * Como o atributo 'onclick' do botão está configurado para chamar a função 'clicked', sempre que clicarmos nele aparecerá um popup
    alert("Clicou no botão utilizando o atributo 'onclick'");
}

const clicked2 = () => {
    alert("Clicou no botão utilizando o método 'addEventListener'");
}

const clicked3 = () => {
    alert("Clicou no botão utilizando utilizando o método 'addEventListener' da forma mais simplificada")
}

let clickedButton = document.querySelector('#button2'); // * Utilizando o seletor CSS, busca o primeiro elemento no DOM com o id 'button2
clickedButton.addEventListener('click', clicked2); // * Executa o método que fica esperando um determinado evento acontecer para que uma determinada função seja chamada. No caso, dentro do método 'addEventListener('evento', funcao')', nos colocamos, dentro dos parênteses, o evento e a função que será chamada

document.querySelector('#button3').addEventListener('click', clicked3); // * Versão mais simplificada da função acima, onde não é necessário criar uma variável