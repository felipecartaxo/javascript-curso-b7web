let name = 'Felipe';    // Declarando a variável "name" da forma convencional
let names = ['Felipe, Karen']   // Declarando "names" usando array
let character = {   // Criando o objeto "character"
    nickname: 'Neraky',
    age: 27,
    country: 'Brazil',
    eyes: ['black', 'blue'],
    stats: {    // Criando um objeto dentro de um objeto já existente
        str: 20,
        dex: 40,
        stamina: 18
    }
}

console.log(character);
console.log(character.nickname);    // Como exibir um determinado atributo de um objeto
console.log(`${character.nickname} is ${character.age} years old.`);
console.log(`${character.nickname} has ${character.stats.dex} of DEX.`);    // Como exibir um atributo de um objeto dentro de outro objeto
console.log(`${character.nickname} has ${character.eyes[0]} eyes.`);    // Como exibir um array dentro de um objeto