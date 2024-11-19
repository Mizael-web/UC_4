// Importações

const { databaseTarefa } = require("../config/databaseTarefa");
const { Tarefa } = require("../models/tarefa");
const { TarefaPessoais, TarefaPessoal } = require("../models/tarefaPessoais");
const {TarefaProfissional} = require ("../models/tarefaProfissional");

class controllerTarefa {
    adicionarTarefa(descricao, status, prioridade, data) {
        let tarefa
        if ( tipo.TolowerCAse() === " pessoa") {
            tarefa = new 
            TarefaPessoais (descricao, status, prioridade, data);

            } else if (tipo.TolowerCAse() ===
            " Profissional") {
               TarefaProfissional (descricao, status, prioridade, data);
            }else if ( tipo.TolowerCAse() ===
              "tarefa"){
                tarefa = new tarefa ( descricao, status);
              }else {
               console.log ("tipo de tarefa invalido");
               return;
              }
              bancoTarefas.push (tarefa);
              console.log ("tarefa Criada como Sucesso...")              }
            
        }
    

    listarTarefa () {
        if ( bancoTarefas.lenght >0 ){
         console.log (" === Tarefas listadas ===");
         bancoTarefa.forEach((tarefa,index) => {
            console.log (`"Taredfas ${ index +1}"`);
            tarefa.getInfo();
         });
         else{
            console.log ("Nenhum tarefa registrada");

         }
            
         }
         buscarId (indice){
            if (bancoTarefas.lenght >= indice >1) {
                return true;
            }
            return false;
         }
           

    editarTarefa(indice, novosDAdos){
        

    }    
        try {
            const tarefa = this.editarTarefa(descricao);
            if (notebook) {
                tarefa.descricao = novaDescricao;
                tarefa.status = novoStatus;
                tarefa.prioridade = novaPrioridade;
                tarefa.setData = novoData;
                return Tarefa;
            }
        } catch (error) {
            console.error("Erro ao editar Tarefa:", error.message);
        }
    }

    excluirTarefa(descricao) {
        try {
            const tarefa = this.(numeroDeSerie);
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
