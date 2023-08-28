/* let fruits = [
    'Apple',
    'Grape',
    'Orange',
    'Banana'
];

console.log(fruits);

fruits.sort(); // * Ordena o array. Por padrão, ele ordena os elementos em ordem alfabética, de A a Z
fruits.reverse(); // * Inverte a ordem dos elementos do array (parar exibir de Z a A, é necessário usá-la após o método sort)
console.log(fruits); */

let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

/* cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1; // * O elemento 'a' será colocado após o elemento 'b'
    }
    else if (a.year < b.year) {
        return -1; // * O elemento 'a' será colocado antes do elemento 'b'
    }
    else {
        return 0; // * Mantém a ordem dos elementos
    }
}); */

/* cars.sort((a, b) => {
    return a.year - b.year; // * Executa a mesma coisa que a função sort acima, com apenas uma linha de código
}); */

cars.sort((a, b) => a.year - b.year); // * Ou podemos resumir ainda mais a arrow function

console.log(cars); // * O array não pôde ser ordenado pois só há objetos dentro do array em questão