document.getElementsByTagName('div'); // * Seleciona todos os elementos HTML que possuem a tag <div> e atribui-os a um array

document.getElementById('test'); // * Obtém um elemento do DOM com o ID "test"

document.getElementsByClassName('button'); // * Obtém um array do DOM com a classe "button"

document.querySelector('#test'); // * Utiliza o seletor CSS para buscar o primeiro elemento no DOM com o ID "test"

document.querySelector('.button'); // * Utiliza o seletor CSS para buscar o primeiro elemento no DOM com a classe "button"

document.querySelector('h1'); // * Utiliza o seletor CSS para buscar o primeiro elemento no DOM do tipo "h1"

document.querySelector('li'); // * Utiliza o seletor CSS para buscar o primeiro elemento no DOM do tipo "li"

document.querySelectorAll('li'); // * Utiliza o seletor CSS para buscar todos os elementos no DOM do tipo "li" e atribui-os a um array

// ? Como fazer para selecionar apenas os 'li' da 'div' cujo id é 'test'
document.querySelectorAll('#test ul li'); // * Utiliza um seletor CSS mais específico para buscar todos os elementos <li> que estão dentro de uma estrutura <ul> com o ID "test" e atribui-os a um array