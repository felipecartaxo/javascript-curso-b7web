// * Classe
class Person {
    
    age = 0;

    constructor(name) {
        this.name = name;
    };

};

// * Factory
const createPerson = (name, age) => { // * 'factory' é uma função que cria uma instância/objeto de algo que desejo criar. Abstrai a complexidade e, quando for necessário instanciar um objeto, chamamos esta função passando apenas os atributos necessários para instanciar um objeto
    let p = new Person(name);
    p.age = age;

    return p;
};

// * Instanciando um novo objeto
let p1 = createPerson('Karen', 23); // * Perceba como fica muito mais simples e intuitivo instanciar um novo objeto por meio da factory

console.log(`${p1.name} tem ${p1.age} anos.`)