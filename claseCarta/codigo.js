const ordenPalo = {
    "c": 1,
    "p": 2,
    "r": 3,
    "t": 4
}

class ExcepcionesCarta extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.nombre = "ExcepcionesCarta";
    }
}

class Carta {
    constructor(numero = 1, palo = "c") {
        if (arguments.length === 1 && numero instanceof Carta) {
            const carta = numero;
            this.numero = carta.getNumero();
            this.palo = carta.getPalo();
        } else {
            this.setNumero(numero);
            this.setPalo(palo);
        }
    }

    getNumero() {
        return this.numero;
    }

    getPalo() {
        return this.palo;
    }

    setNumero(numero) {
        if (Number.isInteger(numero) && numero >= 1 && numero <= 13) {
            this.numero = numero;
        } else {
            throw new ExcepcionesCarta("ERROR DE NUMERO");
        }
    }

    setPalo(palo) {
        const palos = ["c", "p", "r", "t"];
        if (palos.includes(palo)) {
            this.palo = palo;
        } else {
            throw new ExcepcionesCarta("ERROR DE PALO");
        }
    }

    mostrarCarta() {
        var mostrarNumero;
        var mostrarPalo;

        switch (this.getNumero()) {
            case 1:
                mostrarNumero = "As";
                break;

            case 11:
                mostrarNumero = "Jack";
                break;

            case 12:
                mostrarNumero = "Reina";
                break;

            case 13:
                mostrarNumero = "Rey";
                break;

            default:
                mostrarNumero = this.getPalo();
                break;
        }

        switch (this.getPalo()) {
            case "c":
                mostrarPalo = "Corazon";
                break;

            case "p":
                mostrarPalo = "Pica";
                break;

            case "r":
                mostrarPalo = "Rombo";
                break;

            case "t":
                mostrarPalo = "Trebol";
                break;

            default:
                mostrarPalo = this.getPalo();
                break;
        }

        return mostrarNumero + " de " + mostrarPalo;
    }

    comparar(carta) {
        let resultado = 0;

        if (this.getNumero() < carta.getNumero()) {
            resultado = -1;
        } else if (this.getNumero() > carta.getNumero()) {
            resultado = 1;
        } else {
            if (ordenPalo[this.getPalo()] > ordenPalo[carta.getPalo()]) {
                resultado = 1;
            } else if (ordenPalo[this.getPalo()] < ordenPalo[carta.getPalo()]) {
                resultado = -1;
            }
        }

        if (resultado === 1) {
            console.log("El ganador es: " + this.mostrarCarta());
        } else if (resultado === -1) {
            console.log("El ganador es: " + carta.mostrarCarta());
        } else {
            console.log("¡EMPATE ENTRE: " + this.mostrarCarta() + " Y " + carta.mostrarCarta() + "!");
        }

        return resultado;
    }

}



console.log("===== CONSTRUCTORES =====");

try {
    //Constructor por defecto
    const carta1 = new Carta();
    console.log("Carta creada por defecto:");
    console.log(carta1.mostrarCarta());
    
    //Constructor con argumentos
    const carta2 = new Carta(7, "t");
    console.log("Carta creada con argumentos:");
    console.log(carta2.mostrarCarta());
    
    //Constructor de copia
    const carta3 = new Carta(carta2);
    console.log("Copia de la carta anterior:");
    console.log(carta3.mostrarCarta());
    
    
    console.log("\n===== GETTERS =====");
    
    //Obtener los atributos de una carta
    console.log("Número de carta2: " + carta2.getNumero());
    console.log("Palo de carta2: " + carta2.getPalo());
    
    
    console.log("\n===== SETTERS =====");
    
    //Cambiar los atributos de una carta
    carta1.setNumero(12);
    carta1.setPalo("p");
    
    console.log("Carta1 después de modificarla:");
    console.log(carta1.mostrarCarta());
    
    console.log("\n===== MOSTRAR CARTAS =====");
    
    //Mostrar diferentes números especiales
    const cartaAs = new Carta(1, "c");
    const cartaJack = new Carta(11, "p");
    const cartaReina = new Carta(12, "r");
    const cartaRey = new Carta(13, "t");
    
    console.log(cartaAs.mostrarCarta());
    console.log(cartaJack.mostrarCarta());
    console.log(cartaReina.mostrarCarta());
    console.log(cartaRey.mostrarCarta());
    
    
    console.log("\n===== COMPARAR CARTAS =====");
    
    //Gana la carta actual por tener mayor número
    const carta4 = new Carta(10, "c");
    const carta5 = new Carta(5, "t");
    
    console.log("Resultado: " + carta4.comparar(carta5));
    
    //Gana la carta recibida por tener mayor número
    const carta6 = new Carta(3, "p");
    const carta7 = new Carta(8, "c");
    
    console.log("Resultado: " + carta6.comparar(carta7));
    
    //Mismo número: gana el trébol frente al rombo
    const carta8 = new Carta(7, "t");
    const carta9 = new Carta(7, "r");
    
    console.log("Resultado: " + carta8.comparar(carta9));
    
    //Empate: mismo número y mismo palo
    const carta10 = new Carta(4, "p");
    const carta11 = new Carta(4, "p");
    
    console.log("Resultado: " + carta10.comparar(carta11));

    //Mostrar errores de excepciones
    const carta12 = new Carta(15, "r");
    const carta13 = new Carta(10, "x");

} catch (e) {
    console.log(e.mensaje);
}
