/*
Faça um programa pra calcular o valor de uma viagem

Você tera 3 variaveis.Sendo elas:
1-Preço do combustivel;
2-Gasto medio de combustivel do carro por KM;
3-Distancia em km da viagem;
*/

let preçoCombustivel = 5;
let kmPorLitro = 9;
let kmDistancia = 500;

let resultado = (kmDistancia/kmPorLitro)*preçoCombustivel;

console.log(resultado.toFixed(2));