class Person {
    
    age = 0;

    constructor(name) {
        this.name = name;
    };

    sayHi() {
        console.log(`${this.name} diz 'Olá'!`)
    }
};

class Student extends Person { // * A classe 'Student' vai pegar tudo o que há na classe 'Person', mais o que há na própria classe 'Student'
    
    constructor(name, id) {
        super(name);// * Se refere à classe que está extendendo, ou seja, o 'super' está informando que o constructor que será executado será o do pai, ou seja, da classe 'Person'
        this.id = id;
    };

    sayHi() { // * Ao criar um método de mesmo nome na classe 'Student', é possível sobrescrever o método em questão
        console.log(`${this.name} é um estudante e diz 'Olá'!`);
    };

    sayHello() { // * É possível também executar um método que está no pai
        super.sayHi();
    }
};

let p1 = new Student('Felipe Cartaxo', 20221370005);
p1.age = 28;

console.log(`${p1.name} tem ${p1.age} anos e matrícula ${p1.id}.`)
p1.sayHi(); // * O resultado no console foi o do método 'sayHi()' da classe 'Student'
p1.sayHello(); // * Executando método 'sayHi()' que está no pai