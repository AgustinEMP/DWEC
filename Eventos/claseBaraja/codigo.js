const TIPOS = {
    fr: {
        palos: { c: "Corazón", r: "Rombo", p: "Pica", t: "Trébol" },
        maxNumero: 13,
        nombres: { 1: "As", 11: "Jack", 12: "Reina", 13: "Rey" }
    },
    es: {
        palos: { o: "Oros", c: "Copas", e: "Espadas", b: "Bastos" },
        maxNumero: 12,
        nombres: { 1: "As", 10: "Sota", 11: "Caballo", 12: "Rey" }
    }
};
 
class ExcepcionesCarta extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionesCarta";
    }
}
 
class Carta {
    constructor(numero = 1, palo = "c", tipo = "fr") {
        if (arguments.length === 1 && numero instanceof Carta) {
            const carta = numero;
            this.tipo = carta.getTipo();
            this.numero = carta.getNumero();
            this.palo = carta.getPalo();
            this.robada = carta.getRobada();
        } else {
            this.setTipo(tipo);
            this.setNumero(numero);
            this.setPalo(palo);
            this.robada = false;
        }
    }
 
    getNumero() { return this.numero; }
    getPalo() { return this.palo; }
    getRobada() { return this.robada; }
    getTipo() { return this.tipo; }
 
    setTipo(tipo) {
        if (tipo in TIPOS) {
            this.tipo = tipo;
        } else {
            throw new ExcepcionesCarta("ERROR DE TIPO");
        }
    }
 
    setNumero(numero) {
        const { maxNumero } = TIPOS[this.getTipo()];
        if (Number.isInteger(numero) && numero >= 1 && numero <= maxNumero) {
            this.numero = numero;
        } else {
            throw new ExcepcionesCarta("ERROR DE NUMERO");
        }
    }
 
    setPalo(palo) {
        if (palo in TIPOS[this.getTipo()].palos) {
            this.palo = palo;
        } else {
            throw new ExcepcionesCarta("ERROR DE PALO");
        }
    }
 
    setRobada(robada) {
        this.robada = robada;
    }
 
    mostrarCarta() {
        const { palos, nombres } = TIPOS[this.getTipo()];
        const mostrarNumero = nombres[this.getNumero()] ?? this.getNumero();
        return mostrarNumero + " de " + palos[this.getPalo()];
    }
 
    comparar(carta) {
        if (this.getTipo() !== carta.getTipo()) {
            throw new ExcepcionesCarta("NO SE PUEDEN COMPARAR CARTAS DE DISTINTO TIPO");
        }
 
        let resultado = 0;
 
        if (this.getNumero() < carta.getNumero()) {
            resultado = -1;
        } else if (this.getNumero() > carta.getNumero()) {
            resultado = 1;
        } else {
            const orden = Object.keys(TIPOS[this.getTipo()].palos);
            const miPalo = orden.indexOf(this.getPalo());
            const suPalo = orden.indexOf(carta.getPalo());
            if (miPalo > suPalo) {
                resultado = 1;
            } else if (miPalo < suPalo) {
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
 
class Baraja {
    constructor(tipo = "es") {
        if (!(tipo in TIPOS)) {
            throw new ExcepcionesCarta("ERROR DE TIPO");
        }
        this.tipo = tipo;
        this.cartas = [];
 
        const { palos, maxNumero } = TIPOS[tipo];
        for (const palo of Object.keys(palos)) {
            for (let n = 1; n <= maxNumero; n++) {
                this.cartas.push(new Carta(n, palo, tipo));
            }
        }
    }
 
    robar() {
        const posicion = this.cartas.findIndex(c => !c.getRobada());
        if (posicion === -1) {
            return null;
        }
        this.cartas[posicion].setRobada(true);
        return new Carta(this.cartas[posicion]);
    }
 
    numCartas() {
        return this.cartas.filter(c => !c.getRobada()).length;
    }
 
    barajar() {
        const n = this.cartas.length;
        const intercambios = n * 5;
        for (let k = 0; k < intercambios; k++) {
            const i = Math.floor(Math.random() * n);
            const j = Math.floor(Math.random() * n);
            [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
        }
    }
 
    cortar() {
        const n = this.cartas.length;
        const posicion = 1 + Math.floor(Math.random() * (n - 1)); // entre 1 y n-1
        const primerBloque = this.cartas.slice(0, posicion);
        const segundoBloque = this.cartas.slice(posicion);
        this.cartas = segundoBloque.concat(primerBloque);
    }
}
 
 
const CARPETAS = {
    fr: "baraja_francesa_52_cartas/",
    es: "baraja_espanola_48_cartas/"   
};
const EXTENSION = ".jpg";               
const IMAGEN_DORSO = "baraja_espanola_48_cartas/dorso.jpg";  
 
function rutaCarta(carta) {
    return CARPETAS[carta.getTipo()] + carta.getPalo() + carta.getNumero() + EXTENSION;
}
 
const selTipo = document.getElementById("tipo");
const imgMazo = document.getElementById("mazo");
const contador = document.getElementById("contador");
const zonaRobadas = document.getElementById("robadas");
 
let baraja = null;
 
function actualizarMazo() {
    if (baraja === null) {
        contador.textContent = "Pulsa Crear para empezar";
        imgMazo.style.visibility = "hidden";
        return;
    }
    const restantes = baraja.numCartas();
    contador.textContent = "Cartas en el mazo: " + restantes;
    imgMazo.style.visibility = restantes > 0 ? "visible" : "hidden";
}
 
function crear() {
    baraja = new Baraja(selTipo.value);
    zonaRobadas.innerHTML = "";
    actualizarMazo();
}
 
function barajar() {
    if (baraja === null) return;
    baraja.barajar();
}
 
function cortar() {
    if (baraja === null) return;
    baraja.cortar();
}
 
function robar() {
    if (baraja === null) return;
    const carta = baraja.robar();
    if (carta === null) {
        alert("No quedan cartas en el mazo");
        return;
    }
    const img = document.createElement("img");
    img.src = rutaCarta(carta);
    img.alt = carta.mostrarCarta();
    img.title = carta.mostrarCarta();
    zonaRobadas.appendChild(img);
    actualizarMazo();
}
 
imgMazo.src = IMAGEN_DORSO;
document.getElementById("btnCrear").addEventListener("click", crear);
document.getElementById("btnBarajar").addEventListener("click", barajar);
document.getElementById("btnCortar").addEventListener("click", cortar);
document.getElementById("btnRobar").addEventListener("click", robar);
 
crear();