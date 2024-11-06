const { Animal } = require("../jogo/uc4_aula2/Uc4_aula3/Atividade/uc4_aula4_05.11.24/animal")

Herança

reapoveitametno de codigos
aatributos
metodods
superclasses  = Pais
Subcalsess = Filhas

Animal
cachorro    gato    aves( vindo de filhos)



extends =>  palavra reservada para construir as relaçoes de Herança

------------------------

Class Animal
#Nome

constructor (anome){
this.#Nome = nome

}
  EmitirSom (){
console.log (`${this.#\nome}emitie som`);

  }

get getNome () {
    return this.getNome
}

set setNome (nome) {
    this.#nome = nome
}
}
Module.exports = { Animal }

--------------------------
const {Animal} = require ("./animnal)");

class cachorro extends Animal {
#raça

constructor (nome, raca) {
    super(nome)
    this.#raca = raca
}
}

module.exports = {cachrro}          