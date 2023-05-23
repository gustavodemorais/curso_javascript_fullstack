let pilotName = prompt("Qual seu nome piloto?");
let velocity = 0;
let newVelocity = prompt("A que velocidade você gostaria de aceletar?");
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "Km/s");

if (confirmVelocity) {
    velocity = newVelocity;
}

if(velocity <= 0) {
    alert('Nave está parada.Considere partir e aumentar a velocidade');
} else if (velocity < 40) {
    alert('Você esta devagar. Podemos aumentar mais.');
} else if (velocity < 80) {
    alert('Uma boa velocidade para manter.');
} else if (velocity < 100) {
    alert('Velocidade de alta.Considere diminuir')
} else {
    alert('Velocidade de RISCO.Diminua agora a velocidade')
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")