"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarPorAno = filtrarPorAno;
exports.filtrarPorMarca = filtrarPorMarca;
function filtrarPorAno(veiculos, ano) {
    return veiculos.filter(veiculo => veiculo.ano === ano);
}
function filtrarPorMarca(veiculos, marca) {
    return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
}
