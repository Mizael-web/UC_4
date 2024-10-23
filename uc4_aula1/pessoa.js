// como iniciar

class Pessoa {
     
     nome;
     rg;
     cfp;
     idade;
     sexo;
     nacionalidade;
     estadoCivil;

     constructor (nome, rg, cfp, idade, sexo, nacionalidade, estadoCivil){
       this.nome = nome,
       this.rg  =  rg,
       this.cpf = cfp,
       this.idade = idade,
       this.sexo = sexo,
       this.nacionalidade = nacionalidade,
       this.estadoCivil = estadoCivil

     }
     
}
    

let pessoa01 = new Pessoa("Mizael", 383393983, 9988888000999, 34,"masculino","brasileiro", "casado");
console.log(pessoa01);
