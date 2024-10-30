// 
const { Produto } = require("./produtos");

class Pedido {
    #produtos

    constructor() {
        this.#produtos = [];
        Object.freeze(this)
    }
    adicionarProdutos(novoProduto) {

        if (novoProduto instanceof Produto) {
            this.#produtos.push(novoProduto)

        } else {
            console.log(`somete objetios do tipo Produto podem ser acicionados!`)

        }
    }

    mostrarPedido(){
        console.log ("Resumo de Pedido:")
        this.#produtos.forEach(produto => {
            console.log ( produto.getInfoProduto());
        })

    }
}


 module.exports = { Pedido};
