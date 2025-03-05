
import { Veiculo } from "./FiltroVeiculos";

function gerarRelatorio(veiculos: Veiculo[]): string {
    if (veiculos.length === 0) {
        return "Nenhum veículo cadastrado.";
    }

    return veiculos
        .map(
            (veiculo, index) =>
            `${index + 1}. Marca: ${veiculo.marca}, Modelo: ${veiculo.modelo}, Ano: ${veiculo.ano}`
        )
        .join("\n");
}

export { gerarRelatorio };