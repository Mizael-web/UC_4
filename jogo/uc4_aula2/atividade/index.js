// instanciar os objetos do tipo produto e do tipo pedido


const {Produto} = require ("./produtos");
const {Pedido}  = require ("./pedido");



const Produto01 = new Produto("Camisete ", 60);
const Produto02= new Produto ("Bermuda ", 600);

const Produto03 = new Produto("Tenis ", 5000);

const pedido01 = new Pedido();
pedido01.adicionarProdutos(Produto01);
pedido01.adicionarProdutos(Produto03)

pedido01.mostrarPedido();
