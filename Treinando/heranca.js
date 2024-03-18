class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name 
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity) {
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!!\n Diminua ou poderá provocar danos a nave.")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha.")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de descoberta")
    }
}

let darwin = new DiscoverySpaceship("Binho Henrique", 30, 200)

let mobile = new BattleSpaceship("Lucas", 60, 500)

console.log(darwin)
console.log(mobile)

darwin.speedUp(210)
mobile.speedUp(250)

darwin.stop()
mobile.stop()
