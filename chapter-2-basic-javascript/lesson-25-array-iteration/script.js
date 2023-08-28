let fruits = [
    'Banana',
    'Orange',
    'Apple',
    'Grape'
];

/* let bigFruits = fruits.filter((item) => { // * Função para pegar apenas as frutas que possuem mais de 4 letras
    if (item.length > 4) {
        return true; // * Caso possue mais de 4 letras, coloca no array bigFruits
    }
    else {
        return false; // * Não coloca no array bigFruits
    }
});

let bigFruits = fruits.filter((item) => {
    return item.length > 4; // * Realiza a mesma função que o 'if' acima, mas em uma única linha. Retorna apenas as frutas que possuem mais de 4 letras
});

console.log(bigFruits); */

/* let normalFruits = fruits.every ((value) => { // * Só retorna 'true' quando TODOS os itens do array satisfazem a condição abaixo.
    return value.length > 3; // * Verifica se todas as frutas possuem mais de 3 letras
});

if (normalFruits) {
    console.log('Todas as frutas possuem mais de 3 letras');
}
else {
    console.log('Nem todas as frutas possuem mais de 3 letras')
} */

/* let someFruits = fruits.some((value) => { // * Caso precise de uma função que retorne 'true' se houver pelo menos uma ocorrência
    return value.length > 3;
});

if (someFruits) {
    console.log('Algum item tem mais de 3 letras');
}
else {
    console.log('Nenhuma fruta tem mais de 3 letras')
} */

if (fruits.includes('Grape')) { // * Verifica se 'Grape' está inserido no array 'fruits'
    console.log('Tem uva sim!');
}
else {
    console.log('Não tem uva...')
}