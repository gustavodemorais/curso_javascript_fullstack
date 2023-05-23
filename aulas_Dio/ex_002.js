/* O IMC - Indice de Massa Corporal é um criterio da organização Mundial de Saude para dar uma indicação sobre a condição de pose de uma pessoa adulta.
    Forumula do IMC:
        IMC = peso / (altura * altura)
   
   Elaborde um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acorde com a tabela abixo.

   IMC em adultos condição:
   - Abiaxo de 18.5 Abaixo do peso;
   - Entre 18.5 e 25 Peso normal;
   - Entre 25 e 30 Acimo do peso;
   - Entre 30 e 40 Obeso;
   - Acima de 40 Obesidade Grave;
*/

let peso = 150;
let altura = 1.80;

let imc = peso / Math.pow(altura,2);


if (imc < 18.5) {
    console.log(`IMC ${imc.toFixed(2)} - Abaixo do peso`)
} else if (imc > 18.5 && imc < 25) {
    console.log(`IMC ${imc.toFixed(2)} - Peso normal`)
}else if (imc > 25 && imc > 30){
    console.log(`IMC ${imc.toFixed(2)} - Acima do peso `)
}else if (imc > 30 && imc > 40){
    console.log(`IMC ${imc.toFixed(2)} - Obeso `)
}else {
    console.log(`IMC ${imc.toFixed(2)} - Obeso Grave`)
}