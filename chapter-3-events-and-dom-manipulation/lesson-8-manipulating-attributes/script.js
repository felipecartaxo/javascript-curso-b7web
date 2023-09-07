const clicked = () => {
    const input = document.querySelector('#input1');

    const button = document.querySelector('#button');

    console.log(input.getAttribute('type')); /* O método 'getAttribute' retorna o valor do atributo 'type' da variável 'input' */
    console.log(input.getAttribute('placeholder')); /* Retorna o valor do atributo 'placeholder' da variável 'input' */

    if (input.hasAttribute('placeholder')) { /* O método 'hasAttribute' verifica se a variável 'input' possui o atributo 'placeholder' */
        console.log('<input> has the "placeholder" attribute');
    }
    else { /* Caso não possua, será mostrado, no console, a mensagem abaixo */
        console.log('<input> doesnt have the "placeholder" attribute');
    }
    if (input.getAttribute('type') === 'text') { /* Retorna o valor do atributo 'type'. Entrará no 'if' caso 'type = "text"' */
        input.setAttribute('type', 'password'); /* Altera o valor do atributo 'type' para 'password' */
        button.innerText = 'Show your password'; /* Altera o texto do botão */
    }
    else { /* Caso o valor do atributo 'type' não for um texto */
        input.setAttribute('type', 'text'); /* Altera o valor do atributo 'type' para 'text*/
        button.innerText= 'Hide your password'; /* Altera o texto do botão */
    }
}