"use strict";
/* Importando as interfaces */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GerenciadorVeiculos_1 = require("./classe/GerenciadorVeiculos");
const EstoqueVeiculos_1 = __importDefault(require("./classe/EstoqueVeiculos"));
const FiltroVeiculos_1 = require("./classe/FiltroVeiculos");
const RelatorioVeiculos_1 = require("./classe/RelatorioVeiculos");
const Carro1 = {
    marca: "Toyota",
    modelo: "Paseo",
    ano: 1995,
    portas: 2,
    acelerar: () => "O carro está acelerando!"
};
const Carro2 = {
    marca: "Toyota",
    modelo: "Supra",
    ano: 1995,
    portas: 2,
    acelerar: () => "O carro está acelerando!"
};
const Moto1 = {
    marca: "Honda",
    modelo: "NC 750X",
    ano: 2024,
    cilindradas: 745,
    acelerar: () => "A moto está acelerando"
};
const Moto2 = {
    marca: "Honda",
    modelo: "CG",
    ano: 2025,
    cilindradas: 145,
    acelerar: () => "A moto está acelerando"
};
const gerenciadorCarros = new GerenciadorVeiculos_1.GerenciadorVeiculos();
const gerenciadorMotos = new GerenciadorVeiculos_1.GerenciadorVeiculos();
gerenciadorCarros.adicionar(Carro1);
gerenciadorCarros.adicionar(Carro2);
gerenciadorCarros.listarVeiculos();
gerenciadorMotos.adicionar(Moto1);
gerenciadorMotos.adicionar(Moto2);
gerenciadorMotos.listarVeiculos();
gerenciadorCarros.remover(Carro1);
gerenciadorCarros.listarVeiculos();
const estoqueCarros = new EstoqueVeiculos_1.default();
const estoqueMotos = new EstoqueVeiculos_1.default();
estoqueCarros.adicionarEstoque("Corolla", 5);
estoqueCarros.adicionarEstoque("Civic", 3);
estoqueCarros.consultarEstoque("Corolla");
estoqueMotos.adicionarEstoque("Yamaha 250", 8);
estoqueMotos.adicionarEstoque("Honda 150", 10);
estoqueMotos.consultarEstoque("Honda 150");
estoqueCarros.removerEstoque("Civic");
estoqueCarros.consultarEstoque("Civic");
const veiculos = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Honda", modelo: "Civic", ano: 2021 },
    { marca: "Ford", modelo: "Focus", ano: 2020 },
    { marca: "Toyota", modelo: "Hilux", ano: 2022 },
];
console.log("Veículos do ano 2020:", (0, FiltroVeiculos_1.filtrarPorAno)(veiculos, 2020));
console.log("Veículos da marca Toyota:", (0, FiltroVeiculos_1.filtrarPorMarca)(veiculos, "Toyota"));
const veiculo = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Honda", modelo: "Civic", ano: 2021 },
    { marca: "Ford", modelo: "Focus", ano: 2020 },
    { marca: "Toyota", modelo: "Hilux", ano: 2022 },
];
console.log("Relatório de Veículos:\n" + (0, RelatorioVeiculos_1.gerarRelatorio)(veiculos));
