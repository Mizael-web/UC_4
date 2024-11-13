
class Cliente{
    nome
    dataNascimento
    telefone
    #email

    constructor(nome, dataNascimento, telefone, email) {
        this.nome = nome;
        this.dataNascimento= dataNascimento;
        this.telefone = telefone;
        this.#email = email;
                
    }

    get getAno() {
        return this.#email;
    }

    set setEmail(email) {
        this.#email= email;
    }
      
}



module.exports = { Cliente };
