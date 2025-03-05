/* Importando as interfaces */

import { GerenciadorVeiculos } from "./classe/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import EstoqueVeiculos from "./classe/EstoqueVeiculos";


const Carro1: Carro = {
    marca: "Toyota",
    modelo: "Paseo",
    ano: 1995,
    portas: 2,
    acelerar: () => "O carro está acelerando!"
};

const Carro2: Carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: 1995,
    portas: 2,
    acelerar: () => "O carro está acelerando!"
};

const Moto1: Moto = {
    marca: "Honda",
    modelo: "NC 750X",
    ano: 2024,
    cilindradas: 745,
    acelerar: () => "A moto está acelerando"
};

const Moto2: Moto = {
    marca: "Honda",
    modelo: "CG",
    ano: 2025,
    cilindradas: 145,
    acelerar: () => "A moto está acelerando"
};

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

gerenciadorCarros.adicionar(Carro1);
gerenciadorCarros.adicionar(Carro2);
gerenciadorCarros.listarVeiculos();

gerenciadorMotos.adicionar(Moto1);
gerenciadorMotos.adicionar(Moto2);
gerenciadorMotos.listarVeiculos();

gerenciadorCarros.remover(Carro1);
gerenciadorCarros.listarVeiculos();

const estoqueCarros = new EstoqueVeiculos();
const estoqueMotos = new EstoqueVeiculos();

estoqueCarros.adicionarEstoque("Corolla", 5);
estoqueCarros.adicionarEstoque("Civic", 3);
estoqueCarros.consultarEstoque("Corolla");

estoqueMotos.adicionarEstoque("Yamaha 250", 8);
estoqueMotos.adicionarEstoque("Honda 150", 10);
estoqueMotos.consultarEstoque("Honda 150");

estoqueCarros.removerEstoque("Civic");
estoqueCarros.consultarEstoque("Civic");