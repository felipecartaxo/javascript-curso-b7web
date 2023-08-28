// * 'document' diz respeito ao que está na tela, ou seja, o que está aparecendo no navegador
let elements = document.getElementsByTagName('h1'); // * Retorna um array contendo todos os elementos da página com a tag 'h1'
// * 

console.log(elements[0]); // * Como o método 'getElementsByTag' retorna um array, é possível manipulá-los pelos seus respectivos índices
console.log(elements[1]);