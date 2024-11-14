const {controllerNotebook } = require ("../controllers/controllerNotebook");


// instanciar o controller notebook

const notebookcontroller= new controllerNotebook ();

// testando o CRUD para notebook


// 1. criando notebook

console.log (" === criando Notebook ===")
notebookcontroller.adicionarNotebookerror("123ABC", "Dell", "inspirion", "prata",  4000.00);
notebookcontroller.adicionarNotebookerror("+ABC", "positivo", "travando", "preta", 2500)
notebookcontroller.adicionarNotebookerror("456ABC", "positivo", "travando", "preta", 2500)

// listando notebook
console.log (" === listando notebook ===");
notebookcontroller.listarNotebook();

// 3 . BUSCANDO UM NOTEBOOK PLO NUEMRO DE SERIE
console.log ("=== buscando um notebook pelo nuemro de serie ===");
notebookcontroller.buscarNotebook ("123ABC");

// 4  atualizando notebook
console.log ("=== atualizando notebook ===");
notebookcontroller.adicionarNotebookerror ("123ABC", "Dell"," XPC", "BRANCO", 4000)

//5-REMOVENO UM NOTEBOOK
console.log("=== REMOVENDO O NOTEBOOK===");
notebookcontroller.excluirNotebbok ("456abc");
