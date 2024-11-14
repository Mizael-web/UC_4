const { Cliente } = require("./cliente");

class ClientePJ extends Cliente {
    #CNPJ
        
    
    constructor(nome, dataNascimento, telefone, email, cnpj) {
        super(nome, dataNascimento, telefone, email);
        this.#CNPJ = cnpj;
        
    }

    get getCnpj() {
        return this.#CNPJ;
    }


    set setCnpj (novoCnpj) {       
            this.#CNPJ = novoCnpj;
        
        }
    }
   

module.exports = { ClientePJ };