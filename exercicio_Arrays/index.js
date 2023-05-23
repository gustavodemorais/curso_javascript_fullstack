let hitchedSpaceships = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

let crewGreatrThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlataform = hitchedSpaceships.findIndex(spaceship =>{
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship =>{
    return spaceship[0].toUpperCase()
})

let message = `Espaçonave com mais de 9 tripulantes: ${crewGreatrThan9.join(",")}`
message += `\nPlataform com processo de engate: ${ongoingHitchPlataform + 1}` 
message += `\nEspaçonaves destacadas: ${highlightedSpaceships.join(",")}`

alert(message)