const {Animal} = require ("./animal")

class Ave   extends Animal {
#tipoBico
#capacidadeVoo

    constructor ( nome, idade, tipoBico, capacidadeVoo){
      super ( nome, idade)
      this.#tipoBico = tipoBico;
      this.#capacidadeVoo = capacidadeVoo

      Object.freeze (this);
    }

    get getTipoBico () {
        return this.#tipoBico;
            }
     set setTipoBico ( tipoBico){
        this.#tipoBico;
     }
     get getCapacidadeVoo (){
        return this.#capacidadeVoo
     }
     set setCapacidadeVoo ( capacidadeVoo){
        this.#capacidadeVoo;
     }
     emitirSom (){
     console.log (" Emitir Som")
     }
     getInfo (){
     console.log (`Nome: ${this.getnome}, Idade: ${this.getidade}, TipoBico: ${this.gettipoBico}, CapacidadeVoo: ${this.getcapacidadeVoo}`);

    }
}
    module.exports ={ Ave}; 










