class TarefaController {
    constructor() {
        this.tarefas = []; // Armazena as tarefas
    }

    adicionarTarefas(descricao, status, tipo, prioridade, data) {
        const novaTarefa = {
            id: this.tarefas.length + 1,
            descricao,
            status,
            tipo,
            prioridade,
            data
        };
        this.tarefas.push(novaTarefa);
    }

    listarTarefas() {
        if (this.tarefas.length === 0) {
            console.log('Nenhuma tarefa registrada.');
            return;
        }

        console.log('\n === Lista de Tarefas ===');
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1} - ${tarefa.descricao} [${tarefa.status}]`);
        });
    }

    buscarId(indice) {
        return this.tarefas[indice - 1] || null;
    }

    editarTarefas(indice, novosDados) {
        const tarefa = this.buscarId(indice);
        if (!tarefa) {
            console.log('Tarefa não encontrada.');
            return;
        }

        if (novosDados.descricao) tarefa.descricao = novosDados.descricao;
        if (novosDados.status) tarefa.status = novosDados.status;
        if (novosDados.prioridade) tarefa.prioridade = novosDados.prioridade;
        if (novosDados.data) tarefa.data = novosDados.data;

        console.log('Tarefa editada com sucesso.');
    }

    excluirTarefas(indice) {
        const tarefa = this.buscarId(indice);
        if (!tarefa) {
            console.log('Tarefa não encontrada.');
            return;
        }

        this.tarefas.splice(indice - 1, 1);
        console.log('Tarefa excluída com sucesso.');
    }
}

module.exports = { TarefaController };
