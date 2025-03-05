"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorVeiculos = void 0;
class GerenciadorVeiculos {
    constructor() {
        this.veiculos = [];
    }
    adicionar(veiculo) {
        this.veiculos.push(veiculo);
        console.log("Veículo adicionado:", veiculo);
    }
    remover(veiculo) {
        this.veiculos = this.veiculos.filter(v => v !== veiculo);
        console.log("Veículo removido:", veiculo);
    }
    listarVeiculos() {
        console.log("Lista de veículos:", this.veiculos);
    }
}
exports.GerenciadorVeiculos = GerenciadorVeiculos;
exports.default = GerenciadorVeiculos;
