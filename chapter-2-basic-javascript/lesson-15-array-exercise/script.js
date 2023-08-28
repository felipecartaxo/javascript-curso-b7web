let cars = [
    'BMW',
    'Ferrari',
    'Mercedes'
];
console.log(cars) // * Imprime todos os itens do array

let x = 1;
console.log(`1. ${cars[x]}`); // * Apenas imprime o item no índice [1]

cars[1] = 'Audi'; // * Altera o valor do elemento no índice [1]
console.log('2. Lista com Audi: ')
console.log(cars)

cars.push('Volvo') // * Adiciona "Volvo" no final do array
console.log('3. Lista com Volvo: ')
console.log(cars)

console.log('4. Quantidade de itens no array: ') // * Imprime o tamanho do array
console.log(cars.length)