var estudiantes = ["Samy", "Angie", "Sergio", "Rosa"];

function saludarEstudiantes(estudiantes) {
    console.log(`Hola ${estudiantes}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);

}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}