if (condition) {

}




var robot;
var jugador;
var resultado;

function validarJuego(jugador, robot) {

    if (jugador == "papel" && robot == "piedra") {
        resultado = "Ganaste";
    } else if (jugador == "piedra" && robot == "tijeras") {
        resultado = "Ganaste";
    } else if (jugador == "tijera" && robot == "papel") {
        resultado = "Ganaste";
    } else if (jugador == robot) {
        resultado = "Empate";
    } else {
        resultado = "Perdiste";
    }

    return resultado;
}
validarJuego(jugador, robot);