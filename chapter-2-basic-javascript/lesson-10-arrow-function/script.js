// * Método tradicional

/* function sum(x, y) {
    return x + y;
} */

// * Arrow function (se você tem mais de uma linha de código para executar):

/* const sum = (x, y) => {
    return x + y;
} */

// * Arrow function (se sua função só possui uma linha de código):

/*  const sum = (x, y) => x + y; */

// console.log(sum(10, 5));

/* function fullName(lastName) {
    return 'Felipe ' + lastName;
} */

/* const fullName = (lastName) => {
    return 'Felipe ' + lastName;
} */

/* const fullName = (lastName) => 'Felipe ' + lastName; */

const fullName = lastName => 'Felipe ' + lastName // If your function only has one parameter

console.log(fullName('Cartaxo'))