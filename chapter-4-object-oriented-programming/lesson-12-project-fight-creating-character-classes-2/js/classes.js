// * Classes que serão criadas
// * - Knight
// * - Sorcerer
// * - LittleMonster
// * - BigMonster

class Character { // * Personagem padrão
    // * Definindo valores padrão para os personagens
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    };

    get life() { // * getter que retorna o valor atual da vida
        return this._life;
    };

    set life(newLife) { // * setter que atualiza a vida do personagem e verifica se o valor final é maior do que zero
        this._life = newLife < 0 ? 0 : newLife; // * Se 'newLife' do meu personagem for menor do que zero, sete-a como zero. Caso contrário, pode setar o próprio 'newLife' 
    };
};

class Knight extends Character {
    constructor(name) {
        super(name); // * O constructor que será executado para o atributo 'name' será o do pai, ou seja, será o constructor da classe 'Character'
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    };
};

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    };
};

class LittleMonster extends Character {
    constructor(name) {
        super('Little Monster'); // * Setando o nome manualmente
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this._life;
    };
};

class BigMonster extends Character {
    constructor(name) {
        super('Big Monster'); // * Setando o nome manualmente
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    };
};

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) { // * 'fighter1/2' se refere aos lutadores que estão lutando entre si e 'fighter1/2' refere-se aos elementos dos mesmos que serão manipulados na tela
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    };

    start() { // * Método para iniciar o jogo
        this.update(); // * Atualiza a tela
    };

    update() { // * Atualiza a tela com as informações dos personagens
        // * Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name; // * Coloca o nome do 'fighter1' na tela
        // * Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name; // * Coloca o nome do 'fighter2' na tela

    };
};