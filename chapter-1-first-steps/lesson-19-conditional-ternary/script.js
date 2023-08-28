let isMember = false;

let shipping = ((isMember) ? 2 : 10); // * Se você é um membro, seu frete custa 2, caso contrário custará 10

console.log(isMember ? "You're a member" : "You aren't a member"); // * Se você é um membro, imprimirá "you're a member", caso contrário exibirá "You aren't a member"
console.log("Shipping: R$ " + shipping);
console.log("------------------");

let age = 90;

let isAdult = ((age >= 18) ? "You are an adult" : "You aren't an adult"); // * Se sua idade for maior ou igual a 18, imprimirá "You are an adult", caso contrário irá mostrar "You aren't an adult"

console.log(isAdult);