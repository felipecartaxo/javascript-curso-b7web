const clicked = () => {
    const button = document.querySelector('button');
    // * console.log(button.classList); Retorna um array contendo todas as classes e outros metadados
    // * button.classList.add('button3'); Adiciona a classe 'button3' ao botão
    // * button.classList.remove('button2'); Remove a classe 'button2'

    /* if (button.classList.contains('button3')) { Verifica se o elemento 'button' possui a classe 'button3'
        button.classList.remove('button3');
        button.classList.add('button2');
    }
    else {
        button.classList.remove('button2');
        button.classList.add('button3');
    } */

    // * button.classList.toggle('button3'); Verifica se a classe 'button3' está inserido em 'button'. Se estiver, ela será removida, caso contrário, será inserida

    // * button.classList.replace('button2', 'button4'); Substitui a classe 'button2' pela classe 'button4'
    if (button.classList.contains('button2')) {
        button.classList.replace('button2', 'button3');
    }
    else {
        button.classList.replace('button3', 'button2');
    }
};