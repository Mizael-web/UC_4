// 
const { produto } = require("./produtos");

class pedido {
    #produtos

    constructor() {
        this.#produtos = [];
        Object.freeze(this)
    }
    adicionarProduto(novoProduto) {

        if (novoProduto instanceof Produto) {
            this.#produtos.push(novoProduto)

        } else {
            console.log(`somete objetios do tipo Produto podem ser acicionados!`)

        }
    }

    mostrarPedido(){
        console.log ("Resumo de Pedido:")
    }
}

