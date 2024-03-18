class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false

    }

    hitch(){
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let choseOption
    while(choseOption != "1" && choseOption != "2" && choseOption != "3") {
        choseOption = prompt( "O que deseja fazer?\n1 - Engatar Nave\n2 - Imprimir naves\n3 - Sair do Programa")
    }

    return choseOption
}


function createSpaceship(){
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes da nave")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(hitchedSpaceships) {
    let spaceshipList = ""
    hitchedSpaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
        alert(spaceshipList)
    })
}

let hitchedSpaceships = []

let choseOption

while(choseOption != "3") {
    choseOption = showMenu()
    switch(choseOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}