var datos = [
    {
        nombre: "PEPE",
        apellidos: "LOPEZ PEREZ",
        telefono: "666666666",
        asignaturas: {
            nombre: "DWEC",
            codigo: "1111"
        }
    },
    {
        nombre: "MARIA",
        apellidos: "GARCIA GOMEZ",
        telefono: "677777777",
        asignaturas: {
            nombre: "DWES",
            codigo: "2222"
        }
    },
    {
        nombre: "JUAN",
        apellidos: "MARTINEZ RUIZ",
        telefono: "688888888",
        asignaturas: {
            nombre: "DIW",
            codigo: "3333"
        }
    },
    {
        nombre: "ANA",
        apellidos: "FERNANDEZ SANCHEZ",
        telefono: "699999999",
        asignaturas: {
            nombre: "DAW",
            codigo: "4444"
        }
    }
];

// Ejercicio 1
//Realiza un listado completo en consola de todos los profesores juntos con la asignatura que impartan

for (let i in datos) {
    console.log(datos[i].nombre + " imparte la asignatura " + datos[i].asignaturas.nombre);
}

// Ejercicio 2
// Dado un codigo de asignatura, mostrar el nombre y apellidos del profesor que la imparte

var codAsignatura = "1111";

console.log("El codigo de asignatura es: " + codAsignatura);
for (let i in datos) {
    if (datos[i].asignaturas.codigo === codAsignatura) {
        console.log(datos[i].nombre + " " + datos[i].apellidos);
    }
}


var profesor = {}