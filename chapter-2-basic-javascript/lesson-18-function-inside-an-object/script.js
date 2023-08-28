let person = {
    firstName: 'Felipe',
    lastName: 'Cartaxo',
    age: 32,
    fullName: function() { // * Cria uma função (que terá o mesmo nome do atributo, ou seja, "fullName")
        return `${this.firstName} ${this.lastName}`; // * O "this" se refere ao próprio objeto. Em resumo, ele consegue acessar os atributos do objeto sem a necessidade de instanciá-lo
    }
    /* fullName: () => {
        return `${this.firstName} ${this.lastName}`; // * O arrow function, por se tratar de uma função anônima, não tem acesso ao this, portanto, ao tentar imprimi-lo, temos apenas "undefined" no console
    } */
}

console.log(person.fullName()); // * Executa a função "fullName" dentro do objeto "person"