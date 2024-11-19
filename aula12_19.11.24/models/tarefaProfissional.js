const { Tarefa } = require("./tarefa")

class TarefaProfissional extends Tarefa  {
    #prioridade
    #data    



    constructor(prioridade, data, status) {
        super (descricao, status);
        this.#prioridade = prioridade
        this.#data= data
        object.freeze (this)
    }

    get getPrioridade() {
        return this.#prioridade;
    }

    set setPriodade(prioridade) {
        this.#prioridade = prioridade;
    }

    get getData() {
        return this.#data;
    }
    set setData(data) {
        this.#data = data;
    }

    getInfo() {
        console.log
            (`Prioridade: ${this.getPrioridade}, Data: ${this.getData}`);
    
 
    }
}

module.exports = { TarefaProfissional};