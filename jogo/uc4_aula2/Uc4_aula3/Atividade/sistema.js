
class SistemaAzar {
     
    Jogador;
    Dado;
    

    constructor (Jogador, Dado){
        this.Jogador = Jogador;
        this.Dado  =  Dado;
        
    }
    getJogador(){
       return this.Jogador;
    }  
    getDado(){
       return this.Dado;
    }  

    setJogador(Jogador){
        this.Jogador = Jogador;
    }
    setDado(Dado){
        this.Dado = Dado;
    }

     
      exibirDados(){
        console.log (
          `
            Dados SistemaAzar
            Jogador: ${this.Jogador}
            Dado: ${this.Dado}        
         `
        )
      }
    }