function sum(num1, num2) { // * Cria uma função chamada "sum", que recebe dois parâmetros
    let result = num1 + num2;
    console.log('Result: ' + result);
}

sum(10, 15); // * Chama a função "sum", passando dois parâmetros

function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`); // * Exibe o nome completo utilizando template string
}

fullName('Felipe', 'Cartaxo'); // * Chama a função "fullName", passando duas strings como parâmetro