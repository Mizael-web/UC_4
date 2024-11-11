
class Veiculo {
    #ano
    #marca

    constructor(ano, marca) {
        this.#ano = ano
        this.#marca = marca
        Object.freeze ( this)
        
    }

    get getAno() {
        return this.#ano;
    }

    set setAno(ano) {
        this.#ano = ano;
    }

    get getMarca() {
        return this.#marca;
    }
    set setMarca(marca) {
        this.#marca = marca;
    }

    getInfo() {
        console.log
            (`Ano: ${this.getAno}, Marca: ${this.getMarca} `);
    }
    calcularValor() {
        throw new Error("Método calcularVAlor deve ser implementado.");


    }
}

module.exports = { Veiculo};




