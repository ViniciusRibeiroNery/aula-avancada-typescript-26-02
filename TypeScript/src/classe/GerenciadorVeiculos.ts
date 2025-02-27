export class GerenciadorVeiculos<T> {

    private listaVeiculos: T[] = [];

    adicionarVeiculo(veiculo: T): void {
        this.listaVeiculos.push(veiculo);
    }

    listaVeiculo(): T[] {
        return this.listaVeiculos;
    }

    RemoverVeiculo(veiculo: T): boolean {
        const index = this.listaVeiculos.indexOf(veiculo);
        if (index !== -1) {
            this.listaVeiculos.splice(index, 1);
            return true;
        }
        return false;
    }
}