console.log("¡Hola, mundo!");
alert("¡Hola, mundo!");

console.log(numero);
var numero = 10;

const PI = 3.14159;
console.log(PI);
//PI = 0.14;

//OBJETOS EN JS

//var obj1 = {marca: "seat", modelo: "ibiza", color: "rojo"};
const obj1 = { marca: "seat", modelo: "ibiza", color: "rojo" };
console.log(obj1.marca);
obj1.marca = "audi";
console.log(obj1.marca);
console.log(obj1);

//conversiones de tipos
var x = 1;
console.log(x + 1); //2
x = "verde";
console.log(x + 1); //verde
x = "1";
console.log(parseInt(x) + 1); //2

const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});

let caja = document.querySelector("#entrada");

caja.addEventListener("keyup", ()=> {
    let d = document.querySelector("#contenido");
    d.innerHTML = caja.value;

});

caja.addEventListener("mouseover", (contenido) => {
    alert("Has pasado por encima. La coordenada X: " + contenido.clientX + " Coordena Y: " + contenido.clientY);
});


let miVentana = document.querySelector("body");
let cajita = document.getElementById("VerCoordenadas");

miVentana.addEventListener("mousemove", (context) => {
    cajita.innerHTML = '(${context.clientX)';
});