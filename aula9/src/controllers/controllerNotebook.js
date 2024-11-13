

// Importações
const { databaseNotebook } = require("../config/databaseNotebook");
const { Notebook } = require("../models/notebook");

class controllerNotebbok {
    adicionarNotebook(numeroDeSerie,  marca, modelo, cor, preco) {
        try {
            const novoNotebook = new Notebook (numeroDeSerie,  marca, modelo, cor, preco);
            databaseNotebook.push(novoNotebook);
            console.log ( "notebook adicionado com Sucesso!");
            return novoNotebook
          
        } catch (error) {
            console.error("Erro ao criar Notebook:", error.message);
        }
    }

    listarNotebook() {
        try {
            const dadosNotebook = databaseNotebook.map(notebook => ({
                numeroDeSerie: notebook.getNumerodeSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco,
            }));
            console.table(Notebook);
        } catch (error) {
            console.error("Erro ao listar Notebook:", error.message);

    editarNotebook(numeroDeSerie, novoMarca, novoModelo, novaCor, novoPreco) {
        try {
            const notebook = notebbok.find(novoNotebook => notebook.getNumerodeSerie === getNumerodeSerie);
            if (notebook) {
                notebook.marca = novaMarca || notebook.marca;
                notebook.modelo = novomodelo || notebook.modelo;
                notebook.cor = novoCor || Notebbok.cor;
                notebook.preco = novoPreco ||  notebook.preco
            } else {
                console.log("Notebook não encontrado!");
            }
        } catch (error) {
            console.error("Erro ao editar aluno:", error.message);
        }
    }


    // const controllerNotebbok = new controllerNotebbok

    // controllerNotebboks.adicionarNotebook("12345","HP", "Gamer", "verde", "12000");
    // controllerNotebbok()


    excluirNotebbok(numeroDeSerie) {
        try {
            const index = notebook.findIndex(notebook => notebook.getNumerodeSerie === numeroDeSerie);
            if (index !== -1) {
                const notbookRemovido = notebook.splice(index, 1);
                return notebookRemovido;
            } else {
                console.log("Notebook não encontrado!");
            }
        } catch (error) {
            console.error("Erro ao excluir notebook:", error.message);
        }
   
        excluirTodosNotebooks() {
            try {
                const index = alunos.findIndex(aluno => aluno.getMatricula === matricula);
                if (index !== -1) {
                    const alunoRemovido = alunos.splice(index, 1);
                    return alunoRemovido;
                } else {
                    console.log("Aluno não encontrado!");
                }
            } catch (error) {
                console.error("Erro ao excluir aluno:", error.message);
            }

    }
}

module.exports = { NotebookController };
