import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

const Carro1: Carro = {
    marca: "Toyota",
    modelo: "Paseo",
    ano: 1995,
    portas: 2,
    acelerar: () => "O carro está acelerando!"
};

const Moto1: Moto = {
    marca: "Honda",
    modelo: "NC 750X",
    ano: 1995,
    cilindradas: 745,
    acelerar: () => "A moto está acelerando"
};

console.log("Carro: ", Carro1);
console.log(Carro1.acelerar());
console.log("Moto: ", Moto1);
console.log(Moto1.acelerar());