// * Classe 'Person' contendo dois atributos
class Person {
    constructor(name, age) {
        this.name = name; // * O 'this' se refere ao próprio objeto que estou criando, ou seja, estou dizendo que o nome desse objeto será o nome que passei no constructor
        this.age = age;
    }
};

let p1 = new Person('João', 20); // * Instanciando uma classe chamada 'p1'
let p2 = new Person('Maria', 30); // * Instanciando uma classe chamada 'p2'
let p3 = new Person('Pedro', 40); // * Instanciando uma classe chamada 'p3'

console.log(p1.name); // * Exibe o atributo 'name' do objeto 'p1'
console.log(p2.name); // * Exibe o atributo 'name' do objeto 'p2'
console.log(p3.name); // * Exibe o atributo 'name' do objeto 'p3'
console.log(p1.age); // * Exibe o atributo 'age' do objeto 'p1'

// * Classe onde o constructor possui apenas o atributo 'name'
class Person2 {

    age = 0; // * Nesse caso, todo objeto instanciado terá 'age = 0';

    constructor(name) {
        this.name = name;
    };
};

p4 = new Person2('Paulo');
console.log(`${p4.name} tem ${p4.age} anos.`);
p4.age = 23; // * No entanto, é possível alterar o valor da propriedade 'age'
console.log(`${p4.name} tem ${p4.age} anos.`);