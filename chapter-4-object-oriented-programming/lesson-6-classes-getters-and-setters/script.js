class Person {
    _age = 10; // * Foi colocado o '_' para diferenciar do 'getter' e do 'setter'
    steps = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    takeAStep() {
        this.steps ++;
    };

    /* setAge(newAge) {
        if (typeof newAge == 'number') {
            this._age = newAge;
        }
        else {
            console.log('Idade não aceita. Por favor, insira apenas números');
        }
    }; */

    get age() { // * 'getter' que retorna a idade
        return this._age;
    };

    get fullName() { // * getter' que retorna o nome completo
        return `${this.firstName} ${this.lastName}`;
    };

    set age(newAge) { // * 'setter' para atualizar a idade
        if (typeof newAge == 'number') {
            this._age = newAge;
        };
    };
};

let p1 = new Person('João', 'Victor');
let p2 = new Person('Maria', 'das Dores');
let p3 = new Person('Pedro', 'Flores');

p1.age = 20; // * Utilizando o 'setter'
console.log(`${p1.fullName} tem ${p1._age} anos.`);
