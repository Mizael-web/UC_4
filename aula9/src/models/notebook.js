
class Notebook {
    #numeroDeSerie;
    #preco

    
    constructor(  numeroDeErie, marca, modleo, cor, preco) {
       this.#numeroDeSerie = this.#numeroDeSerie;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor
        this.#preco = preco
                
    }

    get getNumeroDeSerie() {
        return this.#numeroDeSerie;
    }

    set setNumeroDeSerie(NjmerodeSerie) {
        this.#numeroDeSerie = numeroDeSerie;
    }

    get getPreco() {
        return this.#preco;
    }
    set setPreco(preco) {
        this.#preco = preco;
    }

    // getInfo() {
    //     console.log
    //         (`Ano: ${this.getAno}, Marca: ${this.getMarca} `);
  
}

module.exports = { Notebook };
