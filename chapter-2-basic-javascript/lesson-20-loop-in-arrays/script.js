/* let colors = [
    "black",
    "white",
    "blue",
    "red"
]
colors.push("green");

for (let x = 0; x < colors.length; x += 1) {
    console.log(`${colors[x]}`);
}

for (let y in colors) { // * Vai executar de acordo com o número de elementos do array "colors" tiverem de itens. Ou seja, a cada execução do loop, a variável "i" será criada e "i" terá a chave do array "colors"
    console.log(`${colors[y]}`);
}

for (let color of colors) { // * Desta forma, o valor de cada elemento do array "colors" será atribuído à variável "color"
    console.log(`${color}`);
} */

let colors = [
    { name: 'black', quantity: 10 },
    { name: 'blue', quantity: 5 },
    { name: 'red', quantity: 15 }
];

for (let x in colors) {
    console.log(`Color name: ${colors[x].name}`); // * É o mesmo que imprimir "colors[0].name/colors[1].name/colors[2].name no console"
}

for (let y in colors) {
    console.log(`Color name: ${colors[y].name} - Quantity: ${colors[y].quantity}`);
}

for (let color of colors) {
    console.log(`Name: ${color.name} - Quantity ${color.quantity}`);
}

// * Os dois últimos "for" acima imprimem a mesma coisa, mas de jeitos diferentes

for (let z in colors) {
    console.log(`NAME: ${colors[z].name.toUpperCase()}`);   // * Também é possível utilizar loops para fazer alterações nos elementos do array
}