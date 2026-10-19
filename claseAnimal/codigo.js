class Animal {
    constructor (nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }

    hablar() {
        console.log("hacer ruido");
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza);
    }

    hablar() {
        console.log("GUAU");
    }

}

class Gato extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza);
    }

    hablar() {
        console.log("MIAU");
    }

}

var obj1 = new Animal("Zeus", "Loro");
var obj2 = new Perro("Pelusa", "Mastin");

obj1.hablar();
obj2.hablar();

var granja = [];
granja.push(new Animal("Lorenzo", "Desconocido"));
granja.push(new Perro("Badosa", "Labrador"));
granja.push(new Gato("Mishel", "Persa"));
granja.push(new Perro("Lola", "Caniche"));

for(a of granja) {
    a.hablar();
}
