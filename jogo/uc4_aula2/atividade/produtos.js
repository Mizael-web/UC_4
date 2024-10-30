// classes: 
// produto
// - atributos:NamedNodeMap, preço
// metdodo:  getInfoProduto() : rentornar o nome e o preço do produto




class Produto {
   #nome;
   #preco;


constructor (nome, preco){
    this.#nome = nome;
    this.#preco  =  preco;
    
}get getNome(){
   return this.#nome;
}  
set setNome (nome) {
 this.#nome=nome;
   
}
get getPreco(){
   return this.#preco;
}

set setPreco (preco) {
    this.#preco=preco;
   
}
 getInfoProduto () {
    return ` ${this.#nome} -R$ ${this.#preco}`;

 }
 
  }

  module.exports = {Produto};