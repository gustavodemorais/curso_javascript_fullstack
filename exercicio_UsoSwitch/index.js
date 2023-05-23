let distanceInLy = prompt ("Digite a disntância em anos-luz")
let choseOption = prompt ("Para qual unidade deseja converter? \n1. Parse(pc)\n2. Unidade astronômica(AU) \n3. Quilômetros(km) \n\n(Digite o número desejado)")
let chosenUnity
let convertedDistance

switch (choseOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLy * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLy * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLy * 9.5 * Math.pow(10,12)
        break
    default:
        chosenUnity = "Unidade não identificada"        
        convertedDistance = "Conversão fora do escopo"

    }
          
alert("Distância em anos-luz: " + distanceInLy + "\n" + chosenUnity + ":" + convertedDistance)
        