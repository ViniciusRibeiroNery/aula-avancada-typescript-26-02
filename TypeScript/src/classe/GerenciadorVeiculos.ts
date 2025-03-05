export class GerenciadorVeiculos<T> {

    private veiculos: T[] = [];

    adicionar(veiculo: T): void {
        this.veiculos.push(veiculo);
        console.log("Veículo adicionado:", veiculo);
    }

    remover(veiculo: T): void {
        this.veiculos = this.veiculos.filter(v => v !== veiculo);
        console.log("Veículo removido:", veiculo);
    }
    listarVeiculos(): void {
        console.log("Lista de veículos:", this.veiculos);
    }
}

export default GerenciadorVeiculos;