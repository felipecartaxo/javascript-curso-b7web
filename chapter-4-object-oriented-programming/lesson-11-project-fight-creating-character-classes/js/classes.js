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
        }
    }