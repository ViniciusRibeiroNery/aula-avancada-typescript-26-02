"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarRelatorio = gerarRelatorio;
function gerarRelatorio(veiculos) {
    if (veiculos.length === 0) {
        return "Nenhum veículo cadastrado.";
    }
    return veiculos
        .map((veiculo, index) => `${index + 1}. Marca: ${veiculo.marca}, Modelo: ${veiculo.modelo}, Ano: ${veiculo.ano}`)
        .join("\n");
}
