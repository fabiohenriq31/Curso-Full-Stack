let name = prompt("Qual é o nome do piloto")
let velocity = prompt("Qual a velocidade da nave")

if (velocity <= 0) {
  alert("Nave está para. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
  alert("Você está devagar, podemos aumentar mais")
} else if (velocity >= 40 && velocity < 80) {
  alert("Parece uma boa velocidade para manter")
} else if (velocity >= 80 && velocity < 100) {
  alert("Velocidade alta. Considere diminuir")
} else if ( velocity >= 100) {
  alert("Velocidade perigosa. Controle automático forçado.")
}



 
