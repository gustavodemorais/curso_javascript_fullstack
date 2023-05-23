let spaceship = prompt('Digite o nome da nave');
let charToReplace = prompt('Qual caracter vc deseja substituir?');
let replecamentChar = prompt('Por qual caracter vc deseja substiruir?');
let newSpaceship = ''

for(let pos = 0; pos < spaceship.length; pos++) {
    if (spaceship[pos] == charToReplace) {
        newSpaceship += replecamentChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert (newSpaceship)