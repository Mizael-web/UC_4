// instanciar os objetos do tipo produto e do tipo pedido


const {produto} = require ("./produtos");
const {pedido}  = require ("./pedido");



const produto01 = new produto ("Camisete ", 60);
const produto02 = new produto ("Bermuda ", 600);
const produto03 = new produto ("Tenis ", 5000);

const pedido01 = new Pedido ();
pedido.adicionarProduto(produto01);
pedido.adicionarProduto(produto03)

pedido.mostrarPedido();
