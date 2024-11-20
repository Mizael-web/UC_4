const prompt = require("prompt-sync")(); // Corrigido para uso adequado
const { TarefaController } = require("./controller/tarefacontroller");

const controller = new TarefaController();

function iniciarSistema() {
    let opcao;
    do {
        console.log('\n === Sistema de Gestão de Tarefas ===');
        console.log('1 - Adicionar Tarefa');
        console.log('2 - Listar Tarefas');
        console.log('3 - Editar Tarefa');
        console.log('4 - Excluir Tarefa');
        console.log('0 - Sair');
        opcao = prompt('Escolha uma opção: (0 a 4) '); // Corrigido para capturar entrada

        switch (opcao) {
            case '0':
                console.log('Saindo do sistema...');
                break;
            case '1':
                adicionarTarefa();
                break;
            case '2':
                controller.listarTarefas(); // Ajustado para convenção de nomes
                break;
            case '3':
                editarTarefa();
                break;
            case '4':
                excluirTarefa();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    } while (opcao !== '0'); // Loop encerra quando opção for '0'
}

function adicionarTarefa() {
    const descricao = prompt('Informe a descrição da tarefa: ');
    const status = prompt('Informe o status da tarefa: ');
    const tipo = prompt('Informe o tipo da tarefa (Pessoal, Profissional ou Tarefa): ');
    const prioridade = prompt('Informe a prioridade da tarefa: ');
    const data = prompt('Informe a data da tarefa: ');

    controller.adicionarTarefas(descricao, status, tipo, prioridade, data); // Nome ajustado
    console.log('Tarefa adicionada com sucesso!');
}

function editarTarefa() {
    controller.listarTarefas(); // Nome ajustado
    const indice = parseInt(prompt('Informe o índice da tarefa que deseja editar: '), 10);

    if (isNaN(indice) || indice < 1) {
        console.log('Índice inválido. Operação cancelada.');
        return;
    }

    const result = controller.buscarId(indice); // Nome ajustado

    if (result) {
        const descricao = prompt('Informe a nova descrição da tarefa: ');
        const status = prompt('Informe o novo status da tarefa: ');
        const prioridade = prompt('Informe a nova prioridade da tarefa: ');
        const data = prompt('Informe a nova data da tarefa: ');

        controller.editarTarefas(indice, { descricao, status, prioridade, data }); // Nome ajustado
        console.log('Tarefa editada com sucesso!');
    } else {
        console.log('Tarefa não encontrada.');
    }
}

function excluirTarefa() {
    controller.listarTarefas(); // Nome ajustado
    const indice = parseInt(prompt('Informe o índice da tarefa que deseja excluir: '), 10);

    if (isNaN(indice) || indice < 1) {
        console.log('Índice inválido. Operação cancelada.');
        return;
    }

    const result = controller.buscarId(indice); // Nome ajustado

    if (result) {
        controller.excluirTarefas(indice); // Nome ajustado
        console.log('Tarefa excluída com sucesso!');
    } else {
        console.log('Tarefa não encontrada.');
    }
}

// Inicia o sistema
iniciarSistema();
