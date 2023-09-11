class Person {
    /* A estrutura abaixo costuma ser a padrão ao criar uma classe:
        1. Variáveis comuns a todos os objetos
        2. Constructor
        3. Métodos/Actions */
    
    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
        
    };

    takeAStep() { // * Método criado para incrementar o número de passos   
        this.steps ++;
    };

    setAge(newAge) { // * Método criado para atualizar a idade
        if (typeof newAge == 'number') {
            this.age = newAge;
        }
        else {
            console.log('Idade não aceita. Por favor, insira apenas números');
        }
    };
}

let p1 = new Person('João');
let p2 = new Person('Maria');
let p3 = new Person('Pedro');

console.log(p1.name);
console.log(p2.name);
console.log(p3.name);
console.log(p1.age);

p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);

p1.setAge('a');
console.log(`${p1.name} tem ${p1.age} anos.`)