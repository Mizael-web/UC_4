
class Jogo {
     
    titulo;
    genero;
    anoLancamento;

    constructor (titulo, genero, anoLancamento){
        this.titulo = titulo;
        this.genero  =  genero;
        this.anoLancamento = anoLancamento;
    }
    getTitulo(){
       return this.titulo;
    }  
    getGenero(){
       return this.genero;
    }
    getAnoLançamento(){
       return this.anoLancamento;
    }  

    setTitulo(titulo){
        this.titulo = titulo;
    }
     
      exibirDados(){
        console.log (
          `
            Dados Jogo
            Titulo: ${this.titulo}
            Genero: ${this.genero}
            AnoLancamento: ${this.anoLancamento}
         `
        )
      }
    }

let jogo01 = new Jogo ("passatempo, ", "unisexo", "2010");
// console.log(jogo01());
let jogo02 = new Jogo ("novotempo, ", "unisexo", "2015");
// console.log (jogo02());
let jogo03= new Jogo (" tempo passou, ", "unisexo", "2020");
// console.log(jogo3());
jogo01.exibirDados();

console.log ( jogo01.getTitulo());
jogo01.exibirDados();
console.log ( jogo02.getTitulo());
jogo01.exibirDados();
console.log ( jogo03.getTitulo());
jogo01.exibirDados();



