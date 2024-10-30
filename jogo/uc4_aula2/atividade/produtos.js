// classes: 
// produto
// - atributos:NamedNodeMap, preço
// metdodo:  getInfoProduto() : rentornar o nome e o preço do produto




class Produto {
   #Nome;
   #Preco;


constructor (Nome, preco){
    this.#Nome = nome;
    this.#Preco  =  preco;
    
}get getNome(){
   return this.#Nome;
}  
set setNome (nome) {
 this.#Nome=nome;
   
}
get getPreco(){
   return this.#Preco;
}

set setPreco (preco) {
    this.#Preco=preco;
   
}
 getInfoProduto () {
    return ` $(this.#nome) -R$ $(this.#preco)`;

 }
 
  }

  module.exports = {Produto};
