/*
Faça um programa calcular o valor de uma viagem.

Você terá 5 variaveis.Sendo Elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasta para realizar esta viagem. 
*/

let precoEtanol = 3;
let precoGasolina = 5;
let kmPorLitro = 10;
let kmDistancia = 100;
let tipoCombustivel = 'Gasolina';

const litrosConsmidos = (kmDistancia / kmPorLitro);

if (tipoCombustivel === 'Etanol') {
    let valorGasto = (litrosConsmidos * precoEtanol)
    console.log(valorGasto.toFixed(2))
} else {
    let valorGasto = (litrosConsmidos * precoGasolina)
    console.log(valorGasto.toFixed(2))
}





