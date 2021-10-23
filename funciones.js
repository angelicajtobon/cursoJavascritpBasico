//declarativas ... aplica hoisting

function miFuncion() {
    return 4;
}

//de expresion

var miFuncion = function(a, b) {
    return a + b;
}

miFuncion(3, 4);