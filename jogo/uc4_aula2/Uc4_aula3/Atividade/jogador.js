
class Jogador {     
    Nome;
    Aposta;
    

    constructor (Nome, Aposta){
        this.Nome = Nome;
        this.Aposta  = Aposta;
        
    }
    getNome(){
       return this.Nome;
    }  
    getAposta(){
       return this.Aposta;
    }  

    setNome(Nome){
        this.Nome = Nome;
    }
    
    setNome(Aposta){
        this.Aposta = Aposta;
    }

     
      exibirDados(){
        console.log (
          `
            Dados Jogador
            Nome: ${this.Nome}
            Aposta: ${this.Aposta}
            
         `
        )
      }
    }
    
