
//  const {notbook } = require ( "./notebook");

class Estoque {
    #id
   
    
    constructor( id, produto, quantidade) {

        try {
            if ( produto instanceof Notebook) {
                this.#id = id;
                this.produto = produto; 
                this.quantidade = quantidade;


            }
        } catch (error) {
            console.error ) " não é permitido criar estoque"
        }  
                      
    }set setId(novoId) {
        this.#Id = novoId
    }
}

module.exports = { Estoque };
