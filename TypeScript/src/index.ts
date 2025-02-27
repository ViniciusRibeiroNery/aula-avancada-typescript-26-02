/* Importando as interfaces */

import { GerenciadorVeiculos } from "./classe/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

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

gerenciadorCarros.adicionarVeiculo(Carro1);
gerenciadorMotos.adicionarVeiculo(Moto1);
gerenciadorMotos.adicionarVeiculo(Moto2);
console.log("Lista de Carros: ", gerenciadorCarros.listaVeiculo());
/*
console.log("Carro: ", Carro1);
console.log(Carro1.acelerar());
console.log("Moto: ", Moto1);
console.log(Moto1.acelerar());*/