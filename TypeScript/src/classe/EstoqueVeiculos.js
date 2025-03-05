"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EstoqueVeiculos {
    constructor() {
        this.estoque = {};
    }
    adicionarEstoque(modelo, quantidade) {
        if (this.estoque[modelo]) {
            this.estoque[modelo] += quantidade;
        }
        else {
            this.estoque[modelo] = quantidade;
        }
        console.log(`Adicionado: ${quantidade} unidades do modelo ${modelo}.`);
    }
    removerEstoque(modelo) {
        if (this.estoque[modelo]) {
            delete this.estoque[modelo];
            console.log(`Removido o modelo ${modelo} do estoque.`);
        }
        else {
            console.log(`O modelo ${modelo} não está no estoque.`);
        }
    }
    consultarEstoque(modelo) {
        if (this.estoque[modelo]) {
            console.log(`Modelo ${modelo} - Quantidade: ${this.estoque[modelo]}`);
        }
        else {
            console.log(`Modelo ${modelo} não encontrado no estoque.`);
        }
    }
}
exports.default = EstoqueVeiculos;
