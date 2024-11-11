const prompt = require ('prompt-sync')();
const {VeiculoController} = require ("../controllers/veiculoController");

const controller = new VeiculoController()

function iniciarSistema () {
    let opcao
    do {
        console.log ("=== Sistema de Gerenciamento de Veiculo");
        console.log ("1.Adicionar Veículo");
        console.log ("2 Listar Veiculos");
        console.log ("3 Sair");
        console.log (` Escolha uma opção`);

        switch (opcao){
           case "1":
            adicionarVeiculo();
            break;

            case "2":
            controller.listarVeiculos();
            break;

            case "3":
                console.log (" Saindo do Sistema...");
                    break;

                    default:
                        console.log ("opção Inválida");

        }

    }while ( opcao !== "3");

}

function adicionarVeiculo (){
   const tipo = prompt ("Digite o tipo de veiculo (Carro/Moto)");
   if (tipo.toLowerCase === "veiculo"){

   }
   const marca = prompt ("Digite a mraca do veiculo: ");
   const ano = parseInt(prompt(" Digite o nao do veiculo: "));
   const cor = prompt (" Digite a cor do veiculo: ");
   const modelo = prompt ( " Digite o modelo do veiculo: ");
   controller.criarVeiculo("tipo, ano, marca, modelo, cor");

}

iniciarSistema ();



  