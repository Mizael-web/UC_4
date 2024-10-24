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
     getNome(){
        return this.nome;
     }  
     getRg(){
        return this.rg;
     }
     getCpf(){
        return this.cfp;
     }
     getIdade(){
      return this.idade;
   }
   getSexo(){
    return this.sexo;
 }
 getNacionalidade(){
  return this.nacionalidade;
}
getEstadoCivil(){
  return this.estadoCivil;
}
setNome(nome){
    this.nome = nome;
}
 
  exibirDados(){
    console.log (
      `
        Dados Pessoais 
        Nome: ${this.nome}
        RG: ${this.rg}
        Cpf: ${this.cpf}
        Idade: ${this.idade}
        Sexo : ${this.sexo}
        Nacionalidade: ${this.nacionalidade}
        EstadoCivil: ${this.estadoCivil}
        `
  )
  }

}

    

let pessoa01 = new Pessoa("Mizael", "383393983", "9988888000999", "34","masculino","brasileiro", "casado");
console.log(pessoa01);
console.log (pessoa01.nome);
console.log(pessoa01.getNome());
console.log(pessoa01.getRg());
console.log(pessoa01.getCpf());
console.log(pessoa01.getIdade());
console.log(pessoa01.getSexo());
console.log(pessoa01.getNacionalidade());
console.log(pessoa01.getEstadoCivil());
pessoa01.setNome("Miza");
pessoa01.exibirDados();



