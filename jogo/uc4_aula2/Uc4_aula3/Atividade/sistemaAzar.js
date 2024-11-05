
const {Dado} = require ("./dado");
const {Jogador}  =  require ("./jogador");



class SistemaAzar {
     
   #dado;
    #jogador;
    

    constructor (dado, jogador){

        if (dado instanceof Dado && jogador instanceof Jogador){// verificando se os parametros são do mesmo tipo (jogador
        //jogador e dado  
        
            this.#dado = dado;
            this.#jogador = jogador;                

        } else {

          console.log ( `Os dados fornecidos não são do Tipo Jogador ou Dado`);

        }
        Object.freeze (this) // bloqeueando a criação de novso atributos
      }

      get getDado () {
        return this.#dado;
      }
      set getDado (dado){
        this.#dado = dado;
      }

      get getJogador (){
        return this.#jogador;
      }
      set getJogador (jogador){
        this.#jogador = jogador;
      }

      verificarGanhador(){
      if ( this.#dado.getFace === this.#jogador.getAposta){
           console.log (` Parabens você ganhou! Resultado do SistemaAzar: ${this.#dado.getFace}`);
           this.#jogador.apresentarDados();
           
      }else {
          console.log (`Que pena! Aposte novmente.  Resultado do SistemaAzar: $ {this.#dadi,getFAce}`);
          this.#jogador.apresentarDados();
      }

      }
    }

      module.exports = {SistemaAzar}
     