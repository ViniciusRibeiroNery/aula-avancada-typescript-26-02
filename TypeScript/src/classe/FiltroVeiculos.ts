interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
}

function filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
    return veiculos.filter(veiculo => veiculo.ano === ano);
}

function filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
    return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
}

export { Veiculo, filtrarPorAno, filtrarPorMarca };