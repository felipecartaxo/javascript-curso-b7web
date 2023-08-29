const clicked = () => {
    const test = document.querySelector('#test');
    const ul = test.querySelector('ul');

    /* ul.children[0].append(' (Changed!)'); O 'append' adiciona um determinado conteúdo ao conteúdo que já tem dentro desse elemento. É válido ressaltar também que o 'append' só funciona para texto */

    /* ul.children[0].innerHTML+= (' <strong>(Changed again!)</strong>'); Desta forma, todos os itens de 'ul' foram removidos da memória e adicionados individualmente depois. Desta forma, apesar de ser mais simples do que utilizando o método 'appendChild' e realizar a mesma tarefa, acaba tendo um processamento mais custoso, podendo retardar o carregamento da página em um cenário onde temos mais itens */

    let newLi = document.createElement('li');
    newLi.innerText = 'New list item added'; /* Aqui o elemento ainda está apenas na memória */
    /* ul.appendChild(newLi); 'appendChild' adiciona um novo elemento HTML no final do conteúdo que já existe. É a forma mais indicada para adicionar um novo elemento na tela */
    ul.append(newLi); /* Também é possível fazer dessa forma. O resultado é o mesmo */
    let firstNewLi = document.createElement('li');
    firstNewLi.innerText = 'New first item added';

    ul.prepend(firstNewLi); /* Adiciona um novo elemento HTML no começo do conteúdo já existente */
}