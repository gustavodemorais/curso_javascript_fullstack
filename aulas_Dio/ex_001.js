/* Faça um algoritimo que dado as 3 notas tiradas por um alune em um semestre de faculdade calcule e imprima a seua media e a sua classificação conferme a tabela abaixo.

 Média = (nota 1 + nota 2 + nota 3)/ 3;

 Classificação:
 -Média menor que 5, reprovação;
 -Média entre 5 e 7, recuperação;
 -Média acima de 7, passou de semestre;

 */

let nota1 = 10;
let nota2 = 10;
let nota3 = 5;
let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Sua média foi ${media.toFixed(2)} você está REPROVADO`);
} else if (media >= 5 && media <= 7 ) {
    console.log(`Sua média foi ${media.toFixed(2)} você está de RECUPERAÇÃO`)
} else {
    console.log(`Sua média foi ${media.toFixed(2)} você está APROVADO`)
}
     