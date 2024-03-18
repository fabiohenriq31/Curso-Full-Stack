let objectOne = {
    name: "Fábio",
    age: 17,
    genere: "Masculino"
}

if (objectOne.age < 18) {
    console.log("Olá " + objectOne.name + ", você é menor de idade!")
} else {
    console.log("Olá " + objectOne.name + ", você é maior de idade!")
}

objectOne.estadoCivil = "Solteiro"

console.log(objectOne)