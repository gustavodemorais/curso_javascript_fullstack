let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt('Informe o nome da nave') 
    spaceship.type = prompt('Informe o tipo de nave')
    spaceship.maxVelocity = Number(prompt('Informe a velocidade maxima da nave (km/s)'))
}

function acelerate() {
     let acceleration = Number(prompt('Quanto vc quer acelerar? (km/s)'))
     spaceship.speedUp(acceleration)
     if(spaceship.velocity > spaceship.maxVelocity) {
        alert(`Velocidade maxima ultrapassada! 
               \nVelocidade de Nave: ${spaceship.velocity} (km/s_
               \nVelocidade maxima da nave: ${spaceship.maxVelocity} (km/s)`)
     }
}

function stop() {
    alert(`Nome: ${spaceship.name}
           \nTipo: ${spaceship.type}
           \nVelocidade da nave: ${spaceship.velocity}
           \nMaxima da nave: ${spaceship.maxVelocity}`)
    spaceship.velocity = 0       
}

function showMenu(){
    let chosenOption
    do{
        chosenOption = prompt('Voce deseja:\n1-Acelerar \n2-Parar')
        switch(chosenOption){
            case '1':
                acelerate()
                break
            case '2':
                stop()
                break 
            default:
                alert('Opção invalida')       
        }
    } while(chosenOption != '2')
}

registerSpaceship()
showMenu()