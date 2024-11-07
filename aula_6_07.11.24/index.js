const {Animal} = require ("./animal");
const {Mamifero}  = require ("./mamifero");
const {Ave}  = require ("./ave"); 

let z1 = new Animal ( ' branco', '10');
let m1 = new Mamifero (" azul", "6");
let a4 = new Ave (" azul", "8 ");

z1.getInfo();
z1.emitirSom();
m1.getInfo();
m1.emitirSom();
a4.getInfo();
a4.emitirSom();

