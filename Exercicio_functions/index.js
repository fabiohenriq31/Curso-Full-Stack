let nameRocket = prompt("Digite o nome da nave");
let velocity = 0;

let option = 0;

function acelerate(velocity) {
    let newVelocity = velocity + 5;
    return newVelocity;
}

function desacelerate(velocity) {
    let newVelocity = 0   
        if (velocity < 5) {
            newVelocity = velocity - velocity;

        } else if (velocity < 0){
            
            newVelocity = 0

        } else  {
            newVelocity = velocity - 5;
        }

    return newVelocity;
}

function statsRocket(nameRocket, velocity){
    alert("O nome da nave é " + nameRocket + " e a sua velocidade é de " + velocity)
}

while (option <= 4) {

    option = prompt("Digite o número da opção escolhida \n1- Acelerar a nave em 5km/s \n2- Desacelerar em 5km/s \n3- imprimir dados de bordo \n4- Sair do Programa.")
    

    if (option == 1) {
        velocity = acelerate(velocity);
        console.log("Sua nova velocidade é: " + velocity)
    } else if (option == 2) {
        velocity = desacelerate(velocity);
        console.log("Sua nova velocidade é: " + velocity)
    }else if (option == 3){
        console.log(statsRocket(nameRocket,velocity))
    }else if(option == 4){
        alert("Encerrando programa de bordo.")
        break
}

}