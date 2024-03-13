let velocity = prompt("Digite sua velocidade");
let velocity2 = 0;
switch(velocity / 2) {
    case 50:
        console.log("Sua velocidade dividido por 2 é 50")
        
    case 100:
        console.log("Sua velocidade dividido por 2 é 100")
        
    default:
        velocity2 = velocity / 2;
        console.log("Sua velocidade dividido por 2 é " + velocity2)
        break;
}