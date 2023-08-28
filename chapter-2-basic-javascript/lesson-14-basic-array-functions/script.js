let ingredients = [
    'water',
    'flour',
    'eggs',
    'dye',
    'salt'
];

ingredients.push('milk'); // * Adiciona um item ao final do array
console.log(ingredients)

ingredients.pop(); // * Remove o último item do array
ingredients.shift(); // * Remove o primeiro item do array
console.log(ingredients);

console.log(`Total ingredients: ${ingredients.length}`); // * Retorna o número total de itens do array