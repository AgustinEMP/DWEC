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

var obj1 = new Animal("Zeus", "Loro");
var obj2 = new Perro("Pelusa", "Mastin");

obj1.hablar();
obj2.hablar();