let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"]

console.log(spaceshipNames)

spaceshipNames.forEach(function(currentSpaceship, index){
    console.log("Nave: "+currentSpaceship + "\nÍndice: " + index)
})


let removedSpaceships = spaceshipNames.splice(1,2, "Deméter", "Puller", "Golias")


console.log(spaceshipNames)

console.log(removedSpaceships)