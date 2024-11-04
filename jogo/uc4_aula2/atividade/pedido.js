// 
const { Produto } = require("./produtos");// paso 1

class Pedido {   // passo 2
    #produtos

    constructor() {
        this.#produtos = [];
        Object.freeze(this)
    }
    adicionarProdutos(novoProduto) {

        if (novoProduto instanceof Produto) {
            this.#produtos.push(novoProduto)

        } else {
            console.log(`somente objetos do tipo Produto podem ser adicionados!`)

        }
    }

    mostrarPedido() {
        console.log("Resumo de Pedido:")
        this.#produtos.forEach(produto => {
            console.log(produto.getInfoProduto());
        })
        console.log(`Total = ${this.calcularTotal()}`)
    }
    calcularTotal() {
        return this.#produtos.reduce((total, produto) => total + produto.getPreco, 0);

    }
}


module.exports = { Pedido };
