let naves = []
let totalNaves = []
let option = 0;
class Nave {
    constructor(name, numTripulantes = 0, portas = "Fechadas", engate = "Desengatado"){
        this.name = name
        this.numTripulantes = numTripulantes
        this.portas = portas
        this.engate = engate
    }
    
    openTheDor(openDor) {
        this.portas = openDor
        this.engate = openDor
    }

}

while(option != 3){
    option = prompt("1- Engatar nave\n2-imprimir naves\n3- sair do programa")

    if (option == 1) {
        let nameRocket = prompt("Digite o nome da nave")
        let numTripulation = prompt("Digite o número de tripulantes")

        
        let confirmation = confirm("Deseja engatar a nave?") 

        if (confirmation == true){
            newNave = new Nave(nameRocket, numTripulation, "Abertas", "Engatado")
        } else {
            newNave = new Nave(nameRocket, numTripulation)
        }
        naves.push(newNave.name)
        naves.push(newNave.numTripulantes)
        naves.push(newNave.portas)
        naves.push(newNave.engate)
        totalNaves.push(naves)
        naves = []
        
    }
    else if (option == 2) {
        alert(totalNaves)
    }
    
}

