let array = {
    nombre : "pepe",
    apellido : "Montes",
    curso : "1DAW"
};

let array2 = [["jose", 12, "maria"], ["joadsse", 12, "masadaria"]];

for (const fila in array2) {
    console.log(array2[fila]);
}