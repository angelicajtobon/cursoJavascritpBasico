var miAuto = {
    marca: "spark",
    modelo: "2014",
    color: "gris",
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} , ${this.marca}`);
    }
}

miAuto.color
miAuto.detalleDelAuto

//constructor

function auto(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;

}

var autoNuevo = new auto("chevrolet", "2014", "gris")

var contador = 0;
var cantidadTotal = 10

while (contador < cantidadTotal) {
    var autos = new auto("marca" + contador, "año", "colores");
    contador++;
    console.log(autos);
}