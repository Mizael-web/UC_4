// instanciar os objetos do tipo produto e do tipo pedido
const prompt = require ("prompt-sync")();

const {Produto} = require ("./produtos");
const {Pedido}  = require ("./pedido");


function adicionarProdutosAoPedido(){

      const pedido = new Pedido ();
      while (true){
{
       const nome = prompt ("Digite o nome do produto (ou 'sair' para finalizar)");
       if (nome.toLowerCase() === "sair") 
       break;
       const preco = parseFloat(prompt("digite o preço do produto:"))
       if (isNaN (preco) || preco <= 0 ) {

        console.log (" Preço invalido.tente novamente");
        continue;        
       }

       const produto = new Produto (nome, preco);
       pedido.adicionarProdutos(produto);
       console.log (`Produto "${produto.getNome}" adicionado com sucesso!`)
}
}

// const Produto01 = new Produto("Camisete ", 60);
// const Produto02= new Produto ("Bermuda ", 600);

// const Produto03 = new Produto("Tenis ", 5000);

// const pedido01 = new Pedido();
// pedido01.adicionarProdutos(Produto01);
// pedido01.adicionarProdutos(Produto03)

pedido01.mostrarPedido();

}
  adicionarProdutosAoPedido ();

