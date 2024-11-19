class Tarefa{
    #descricao
    #status
    
    

    constructor( descricao, status) {
        this.#descricao = this.#descricao;
        this.#status= this.#status = " Status não finalizado";
        Object.freeze(this);        
                    
    }

    get getDescricao() {
        return this.#descricao;
    }

    set setEmail(descricao) {
        this.#descricao= descricao;

    }

    get getStatus() {
        return this.#status;
    }

    getInfo() {
        console.log
            (`descrição: ${this.getDescricao}, Status: ${this.getStatus} `);

    }

    finalizarTarefa () {
        this.#status = " Finalizado ";    
    }
}
          

module.exports = { Tarefa };
