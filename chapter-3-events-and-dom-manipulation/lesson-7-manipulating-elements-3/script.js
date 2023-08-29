const clicked = () => {
    const test = document.querySelector('#test');
    const ul = test.querySelector('ul');
    const lastList = document.querySelector('#test2');

    /* ul.before('New text before "ul"');
    ul.after('New text after "ul"'); Adiciona um texto após o elemento 'ul'*/
    
    /* ul.after('<button>Button!</button>'); Não funciona para tags HTML, apenas para adicionar texto */

    /* Para adicionar um elemento HTML antes ou depois de um determinado elemento, faça da seguinte forma */

    const newButton = document.createElement('button'); /* Cria uma variável contendo o elemento HTML que será adicionado. Neste caso, será um <button></button> */
    newButton.innerHTML = 'new button'; /* Altera o texto dentro do elemento HTML */
    ul.before(newButton); /* Adiciona o novo elemento HTML antes do elemento HTML 'ul' */
    /* ul.after(newButton); Adiciona 'newButton' após 'ul' */

    const newUl = document.createElement('ul'); /* Cria o elemento 'ul', ainda na memória, e atribui-o à variável 'newUl */

    for (let i = 1; i <= 5; i ++) { /* Cria um loop, que será executado 5 vezes, para criar os 'li', de 1 a 5 */
        let newLi = document.createElement('li'); /* Cria o elemento 'li' e atribui-o à variável 'newLi' */
        newLi.innerHTML = `Item ${i} added!` /* Adiciona a template string dentro de cada 'li' */
        newUl.append(newLi); /* Joga cada um dos 'li' para o final da lista. Nesta etapa, a lista e seus respectivos 'li' ainda se encontram na memória */
    }

    lastList.after(newUl); /* Nesta etapa, agora sim estamos alerando o DOM e adicionando a nova lista e seus respectivos elementos */
}