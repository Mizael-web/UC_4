const {Animal} = require ("./animal")

class Mamifero extends Animal {

    #tipoPelo
    #habitat

constructor (nome, idade, tipopelo, habitat){
super (nome, idade);
this.#tipoPelo = tipopelo;
this.#habitat = habitat;

Object.freeze (this);
}  

get getTipoPelo (){
    return this.#tipoPelo;
}

set setTipoPelo ( tipopelo){
    this.#tipoPelo;
}
get getHabitat (){
    return this.#habitat;
}
set setHabitat (habitat) {
    this.#habitat;
}

emitirSom (){
console.log (" Emite o som: ")

}
getInfo (){
 ( `Nome: ${this.getnome}, Idade: ${this.getidade}, TipoPelo: ${this.gettipopelo}, Habitat: ${this.habitat}"`);
}
}


module.exports = {Mamifero};