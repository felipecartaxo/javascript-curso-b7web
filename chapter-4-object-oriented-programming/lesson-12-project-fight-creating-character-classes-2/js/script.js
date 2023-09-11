let char1 = new Knight('Neraky'); // * Testando criação da classe 'Knight'
console.log(char1.name);
console.log(char1.life);
console.log(char1.attack);


let char2 = new Sorcerer('Yevaa'); // * Testando criação da classe 'Sorcerer
console.log(char2.name);
console.log(char2.life);
console.log(char2.attack);

let monster1 = new LittleMonster();
console.log(monster1.name);
console.log(monster1.life);
console.log(monster1.attack);

let monster2 = new BigMonster();
console.log(monster2.name);
console.log(monster2.life);
console.log(monster2.attack);

let stage = new Stage(
    char1, // * Passou o objeto que criamos logo acima como parâmetro
    monster1, // * Passou o objeto que criamos logo acima como parâmetro
    document.querySelector('#char'), // * Passa o elemento html cujo id é 'char' como parâmetro
    document.querySelector('#monster') // * Passa o elemento html cujo id é 'monster' como parâmetro
);

stage.start();  // * Inicia a batalha, mas, por enquanto, a única alteração na tela é a atualização dos nomes
// TODO: Evento do botão de atacar