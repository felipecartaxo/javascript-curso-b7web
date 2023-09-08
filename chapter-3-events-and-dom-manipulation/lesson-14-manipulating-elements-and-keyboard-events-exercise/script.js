// * Pegandos elementos que irei precisar manipular
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// * Funções
const HandleKeyUp = (e) => {
    if (e.key == 'Enter') {
        // * Adicionar novo elemento 'li' na lista 'ul'
        const newLi = document.createElement('li');
        newLi.innerText = input.value;
        ul.appendChild(newLi);

        // * Limpar o campo de texto
        input.value = '';
    }
};

// * Eventos
input.addEventListener('keyup', HandleKeyUp);