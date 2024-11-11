const { Veiculo } = require("./veiculo")

class Moto extends Veiculo {
    #modelo
    #cor



    constructor(ano, marca, modelo, cor) {
        super (ano, marca )
        this.#modelo = modelo
        this.#cor = cor
    }

    get getModelo() {
        return this.#modelo;
    }

    set setModelo(ano) {
        this.#modelo = modelo;
    }

    get gerCor() {
        return this.#cor;
    }
    set setCor(cor) {
        this.#cor = cor;
    }

    getInfo() {
        console.log
            (`Ano: ${this.getAno}, Marca: ${this.getmarca} `);
    }
    calcularValor() {
        throw new Error(`Método calcularVAlor deve ser implementado.`);
    }
    getInfo() {
        console.log
            (`Ano: ${this.getAno}, Marca: ${this.getmarca}, Cor: ${this.getcor}, Modelo: ${this.getmodelo} `);
    }
}

module.exports = { Moto};