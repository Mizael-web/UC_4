
class Jogador {     
   #Nome;
   #Aposta;
    

    constructor (Nome, Aposta){
        this.#Nome = Nome;
        this.#Aposta  = Aposta;
        Object.freeze (this);
        
    }
    get getNome(){
       return this.#Nome;
    }  
    get getAposta(){
       return this.#Aposta;
    }  

    set setNome(Nome){
        this.#Nome = Nome;
    }
    
    set setNome(Aposta){
        this.#Aposta = Aposta;
    }

        apresentarDados(){
          console.log (`Nome do Jogador: ${this.getNome}, Aposta: ${this.getAposta}`);
        }
    }

       
    module.exports = { Jogador}
    // let jogador01 = new Jogador ("Jorel", 4);
    // //console.log ( jogador01.getNome);
    // jogador01.apresentarDados();

    
