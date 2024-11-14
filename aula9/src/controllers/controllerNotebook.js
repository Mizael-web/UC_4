

// Importações
const { databaseNotebook } = require("../config/databaseNotebook");
const { Notebook } = require("../models/notebook");

class controllerNotebook {
    adicionarNotebookerror(numeroDeSerie, marca, modelo, cor, preco) {
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco);
            databaseNotebook.push(novoNotebook);

            console.log("notebook adicionado com Sucesso!");
            return novoNotebook

        } catch (error) {
            console.error("Erro ao criar Notebook:", error.message);
        }
    }

    listarNotebook() {
        try {
            const dadosNotebook = databaseNotebook.map(notebook => ({
                numeroDeSerie: notebook.getNumeroDeSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco,
            }));
            console.table(dadosNotebook);
        } catch (error) {
            console.error("Erro ao listar Notebook:", error.message);
        }
    }
    buscarNotebook(numeroDeSerie) {
        try {
            const notebook = databaseNotebook.find(n => n.getNumeroDeSerie === numeroDeSerie);
            if (!notebook) {
                {
                    console.log("Notebook não encontrado.", numeroDeSerie);
                    return;
                }         
                
            }
            console.log("Notebook encontrado: ");
                console.table([notebook]);
                return notebook;
        } catch (error) {
            console.error(" Erro nao adicionar notebook", error.message);

        }

    }


    editarNotebook(numeroDeSerie, novaMarca, novoModelo, novaCor, novoPreco) {
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if (notebook) {
                notebook.marca = novaMarca || notebook.marca;
                notebook.modelo = novoModelo || notebook.modelo;
                notebook.cor = novaCor || notebook.cor;
                notebook.setPreco = novoPreco || notebook.preco
                return notebook;
            }
        } catch (error) {
            console.error("Erro ao editar aluno:", error.message);
        }
    }

    excluirNotebbok(numeroDeSerie) {
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if (notebook) { // vai no buscar se existe notebook,  vai verificar o indice
                const index = databaseNotebook.findIndex(n => n.getNumeroDeSerie === numeroDeSerie);
                const notebookRemovido = notebook.splice(index, 1);
                return notebookRemovido

            }
            console.log("Todos os notebooks removidos com sucesso!")

        } catch (error) {
            console.error("Erro ao remover os Notebooks:", error.message);
        }
    }

    excluirTodosNotebooks() {
        try {
            
            if (databaseNotebook.length > 0) {
                databaseNotebook.lenght = 0 ; // length exl[cluir todos]
        
            }                        
           
    console.log("Todos os notebooks removidos com sucesso!");

    } catch(error) {
        console.error("Erro ao remover os Notebooks:", error.message);
    }
}
}
        module.exports = { controllerNotebook };
