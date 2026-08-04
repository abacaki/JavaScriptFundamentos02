let jogador1 = "papel";
let jogador2 = "pedra";

if(jogador1 === jogador2) {
    console.log("Empate!!");
} else if(jogador1 == "papel" && jogador2 == "pedra" || jogador1 == "pedra" && jogador2 == "tesoura" || jogador1 == "tesoura" && jogador2 == "papel" ) {
    console.log("Jogador 1 vence!")
} else if(jogador2 == "papel" && jogador1 == "pedra" || jogador2 == "pedra" && jogador1 == "tesoura" || jogador2 == "tesoura" && jogador1 == "papel") {
    console.log("Jogador 2 vence!")
} else {
    console.log("Valores inválidos") }