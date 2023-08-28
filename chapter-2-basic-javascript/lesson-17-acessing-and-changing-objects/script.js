/* let character = {
    nickname: 'Neraky',
    age: 27,
    country: 'Brazil',
    eyes: ['black', 'blue'],
    stats: {
        str: 20,
        dex: 40,
        stamina: 18
    }
}

character.nickname = 'Yevaa'; // * Alterando o atributo do objeto
console.log(character.nickname);

character.stats.str += 5; // * Incrementando em 5 a força do personagem
console.log(`SRT: ${character.stats.str}`);

character.eyes.push('green');   // * Adicionando mais uma cor ao fim do array "eyes"
console.log(character.eyes); */

let character = {
    firstName: 'Felipe',
    age: 27,
    cars: [
        { model: 'Fiat', color: 'black' },
        { model: 'Ferrari', color: 'red' }
    ]
}

console.log(character.cars[1].model);