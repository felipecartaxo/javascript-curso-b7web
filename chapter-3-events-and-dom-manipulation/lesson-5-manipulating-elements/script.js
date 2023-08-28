const clicked = () => {
    const test = document.querySelector('#test'); // * Cria uma variável contendo o valor do elemento HTML cujo id é 'test'
    console.log(test.children); // * Em seguida, imprime os filhos imediatos do elemento html cujo id é a variável 'test'. A propriedade 'children' retorna, em forma de array, os elementos contidos na div
    
    /* const ul = test.children[0]; // * Cria uma variável chamada 'ul' que recebe o conteúdo do primeiro elemento (um 'li') do filho imeadiato (uma 'ul') da variável 'test'. Esta forma não é muito aconselhável pois, caso o primeiro elemento mude da lista mude, o valor retornado também mudará */

    const ul = test.querySelector('ul'); // * Retorna a primeira 'ul' da div cujo id é 'test'

    ul.children[0].innerHTML = '<li>Item <strong>changed</strong></li>'; // * Alterando o conteúdo do filho imediato de 'ul' na posição [0]. Note que é possível incluir outras tags HTML dentro
    ul.children[1].innerText = '<li>Item 2<strong>changed</strong></li>'; // * Note que ao utilizar a propriedade 'innerText', tudo será interpretado como texto, mesmo as próprias tags HTMl
    console.log(ul.outerHTML); // * Retorna o elemento interior (os 'li') e o elemento externo, ou seja, a própria 'ul'
    ul.outerHTML = '<img src="https://i.ytimg.com/vi/UQWsRqJ9rRM/maxresdefault.jpg" alt="">' // * Trocou todo o elemento 'ul' e o substituiu por uma imagem

/*  console.log(ul);
    console.log(ul.innerHTML); // * Retorna o conteúdo de 'ul'     
    ul.innerHTML = '<li>Changed item</li>'; // * Retorna o conteúdo de 'ul' e altera o valor da mesma
    ul.innerHTML = ul.innerHTML + '<li>Changed item 2</li>'; // * Desta forma, 'ul' agora terá o valor que já possuia + o novo elemento */
}

/* const clicked = () => {
    alert(document.querySelector('#test2'));
} */