class Person {
    
    age = 0;
    static hands = 2; // * O 'static' significa que a variável 'hands' está associada à classe 'Person', mas não aos objetos instanciados
    static fingers = 10;

    constructor(name) {
        this.name = name;
    };

    static sayHi() {
        // * console.log(`Hi, my name is ${this.name} and I have ${this.hands} hands.`) Ao tentar imprimir, não será possível exibir a variável 'hands', pois ela está associada à classe, não ao objeto
        
        // * console.log(`Hi, my name is ${this.name} and I have ${Person.hands} hands.`) Desta forma, é possível acessar a variável estática 'hands'

        console.log(`Olá!`); // * Desta forma, o método 'sayHi()' não existe para os objetos instanciados
    };
};

let p1 = new Person('Neraky');

 // * Person.hands = 3; É possível alterar o valor da variável estática. Neste caso, todos os objetos instanciados também teriam o valor de 'hands' atualizado, mas, apesar de ser possível, não é comumente feito desta forma

// * console.log(`${p1.name} possui ${Person.fingers} dedos.`) Também é possível acessar uma variável estática sem o método, apenas utilizando 'NomeDaClasse.VariavelEstatica'

// * p1.sayHi(); Nada será impresso

Person.sayHi(); // * Agora funcionará corretamente