
const {Veiculo} = require("./veiculo");

class Carro extends Veiculo {
    #modelo
    #cor

    constructor(ano, marca, modelo, cor) {
        super(ano, marca);
        this.#modelo = modelo;
        this.#cor = cor;
        Object.free(this)
    }

    get getmodelo() {
        return this.#modelo
    }
    set setmodelo(modelo) {
        this.#modelo = modelo
    }

    get getcor() {
        return this.#cor
    }
    set setcor(cor) {
        this.#cor = cor
    }
    calcularValor (){
        console.log (`valor estimado do carro: R$ ${(2024 - this.getAno)*10000}`);
    }

        getInfo() {
            console.log
                (`Ano: ${this.getAno}, Marca: ${this.getmarca}, Cor: ${this.getcor}, Modelo: ${this.getmodelo} `);
        }
    }


module.exports = { Carro };
