
const { Veiculo } = require("../models/veiculo");
const { Carro } = require("../models/carro");
const { Moto } = require("../models/moto");
const bancoVeiculos = [];

class VeiculoController {

    criarVeiculo(tipo, ano, marca, modelo, cor) {
        let veiculo;
        if (tipo.toLowerCase() === `carro`) {
            veiculo = new Carro(ano, marca, modelo, cor);

        } else if (tipotoLowerCase() === `moto`) {
            veiculo = new Moto(ano, marca, modelo, cor);

        } else if (tipo.toLowerCas() === ` veiculo`) {
            veiculo = new Veiculo(ano, marca);

        } else {
            console.log(`Tipo de Veiculo ilnválido.`)
            return;
        }
        bancoVeiculos.push(veiculo);
        console.log("Veiculo cadastrado com sucesso !!!");
    }
    listarVeiculos() {
        if (bancoVeiculos.length > 0 ){

            console.log("==== Veiculos Registrado ====");
            bancoVeiculos.forEach((veiculo, index) => {
                console.log(`${index + 1}`);
                veiculo.getInfo();
                veiculo.calcularValor();
            })
        } else {
            console.log(`Nenhum veículo registrado`);
        }

    }

}

module.exports = {VeiculoController};