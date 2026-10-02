var datos = [];

var btn1 = document.getElementById("boton1");
btn1.addEventListener("click", function () {

    var dni = document.getElementById("dni");
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var telefono = document.getElementById("telefono");

    var profe = {
        dni: dni.value,
        nombre: nombre.value,
        apellidos: apellidos.value,
        telefono: telefono.value,
        asignaturas: []
    };

    datos.push(profe);
});

var btn2 = document.getElementById("boton2")
btn2.addEventListener("click", function () {
    for (const i in datos) {
        console.log("DNI: " + datos[i].dni);
        console.log("Nombre: " + datos[i].nombre);
        console.log("Apellidos: " + datos[i].apellidos);
        console.log("Telefono: " + datos[i].telefono);
        for (const j of datos[i].asignaturas) {
            console.log("Nombre: " + j.nombre);
            console.log("Codigo: " + j.codigo);
        }
    }

});


var dni2 = document.getElementById("DNI2");
var codA = document.getElementById("codA");
var nombreA = document.getElementById("nombreA");
var btn3 = document.getElementById("boton3");
var btn4 = document.getElementById("boton3");

btn3.addEventListener("click", function () {
    for (const i of datos) {
        if (i.dni == dni2.value) {
            var asignatura = {
                codigo: codA.value,
                nombre: nombreA.value
            };
            i.asignaturas.push(asignatura);
        }
    }
});

var btn5 = document.getElementById("boton5");
var dni3 = document.getElementById("DNI3");

btn5.addEventListener("click", function () {
    for (const i of datos) {
        if (dni3 === i.dni) {
            console.log("DNI: " + i.dni);
            console.log("Nombre: " + i.nombre);
            console.log("Apellidos: " + i.apellidos);
            console.log("Telefono: " + i.telefono);
        }
    }
});


