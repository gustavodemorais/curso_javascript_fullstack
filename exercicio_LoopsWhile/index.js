let warpCount = 0;
let chosenOption = '';

let spacechip = prompt ('Digite o nome da nave');

chosenOption = prompt('Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não');

while(chosenOption =='1') {
    warpCount += 1
    chosenOption = prompt('Deseja realizar a proxima dobra?\n1 - Sim\n 2 - Não')
}

alert(`Nave: ${spacechip} \nQuantidade de dobras: ${warpCount}`)