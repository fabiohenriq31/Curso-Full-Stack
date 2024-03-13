class SpacialStation {
    constructor(name, platformsQuantity = 30) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }

    upPlataform(update) {
        this.platformsQuantity += update
    }
}


let observatory = new SpacialStation("Observatório", 40)
let binho = new SpacialStation("Binho")
console.log(observatory)
console.log(binho)

console.log("Binho está aumentando sua plataforma...")

binho.upPlataform(15)

console.log(binho)