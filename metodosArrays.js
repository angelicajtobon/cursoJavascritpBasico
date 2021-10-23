var articulos = [{
        nombre: "Bici",
        costo: 3000
    },
    {
        nombre: "TV",
        costo: 2500
    },
    {
        nombre: "libro",
        costo: 320
    },
    {
        nombre: "celular",
        costo: 10000
    },
    {
        nombre: "laptop",
        costo: 20000
    },
    {
        nombre: "audifonos",
        costo: 1700
    },
    {
        nombre: "teclado",
        costo: 500
    }
];

//metodo filter
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

//metodo map
var nombreArticulo = articulos.map(function(articulo) {
    return articulo.nombre;
});

//metodo find

var encuentraArt = articulos.find(function(articulo) {
    return articulo.nombre === "laptop";
});

//metodo foreach

articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
});

// metodo some hace validacion de verdadero o falso

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});

/* .push() El método .push() nos permite agregar uno o más elementos al final de un array.

.shift()
Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. 
 
.unshift() elimina al inicio

*/