// const {conta } = require (""./conta");
const { ContaPoupanca } = require("./contaPoupanca");

const poupanca01 = new ContaPoupanca(" Valtemir", 5);


console.log(poupanca01.getsaldo);

poupanca01.setSaldo = 500;
console.log(poupanca01.getsaldo);


poupanca01.atualizarRendimento();
console.log(poupanca01.getsaldo);

poupanca01.sacar(200);
