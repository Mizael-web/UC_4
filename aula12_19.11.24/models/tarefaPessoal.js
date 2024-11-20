const { Tarefa } = require("./tarefa")

class TarefaPessoal extends Tarefa  {
    #prioridade;
    #data;    



    constructor(descricao, prioridade, data, Status) {
        super (descricao, Status);
        this.#prioridade = prioridade
        this.#data= data
        Object.freeze (this)
    }

    get getPrioridade() {
        return this.#prioridade;
    }

    set setPriodade(ano) {
        this.#prioridade = prioridade;
    }

    get getData() {
        return this.#data;
    }
    set setData(cor) {
        this.#data = data;
    }

    getInfo() {
        console.log
            (`Prioridade: ${this.getPrioridade}, Data: ${this.getDat} `);
    
 
    }
}

module.exports = { TarefaPessoal};