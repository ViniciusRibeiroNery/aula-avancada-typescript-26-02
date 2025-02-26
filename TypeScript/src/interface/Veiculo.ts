/*O QUE SÂO INTERFACES?

Interfaces são estruturas que permitem definir contratos para objetos,
garantindo que possuam determinados atributos e métodos.

*/

export interface Veiculo {
    marca: String;
    modelo: String;
    ano: number;
    acelerar(): string;
};