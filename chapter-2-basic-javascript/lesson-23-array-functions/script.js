let fruits = [
    'Apple',
    'Grape',
    'Orange',
    'Banana'
]

console.log(fruits); // * Imprime o array
console.log(fruits.length); // * Retorna a quantidade de elementos do array

fruits.push('Kiwi'); // * Insere um item no final do array
console.log(fruits);
console.log(fruits.length);

fruits.pop(); // * Remove o último elemento do array
console.log(fruits);
console.log(fruits.length);

fruits.shift(); // * Remove o primeiro elemento do array
console.log(fruits);
console.log(fruits.length);

console.log(fruits.join(', ')); // * Junta todos os elementos do array em uma string, separando-os separados especificado no "join". Note que o "join" não altera o array propriamente dito, apenas retorna uma string com uma "cópia" dos elementos do array
console.log(fruits.length);

fruits[fruits.length - 1] = 'Pear'; // * ALtera o último elemento do array
console.log(fruits);

/* fruits.pop();
fruits.push('Pear');    // * Faz o mesmo que o comando da linha 26 */