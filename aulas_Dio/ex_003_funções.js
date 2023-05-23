/* Elabore um algoritmo que calcule o que deve ser pago a um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
   Utilize os códigos ada tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
   
   Código Condição de pagamento:
   1 - À vista Débito, receve 10% de desconto;
   2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
   3 - Em duas vezes, o preço normal de etiqueta sem juros;
   4 - Acimda de duas vezes, preço normal de etiqueta mais judos de 10%;
*/


let precoEtiqueta = 100;
let formaDePagamento = 1;

let vistaDebito = precoEtiqueta - (precoEtiqueta * 0.1);
let vistaDinheiro = precoEtiqueta - (precoEtiqueta * 0.15);
let parcelado2 = precoEtiqueta + (precoEtiqueta * 0.1);

function aplicarDesconto(formaDePagamento) {
    if (formaDePagamento === 1){
        console.log(`Preço final será ${vistaDebito}`);
    } else if (formaDePagamento === 2) {
        console.log(`Preço final será ${vistaDinheiro}`);
    } else if (formaDePagamento === 3) {
        console.log(`Preço final será ${precoEtiqueta}`);
    } else if (formaDePagamento === 4) {
        console.log(`Preço final será ${parcelado2}`);
    } else {
        console.log('Opção invalida')
    }
}

aplicarDesconto(1);



