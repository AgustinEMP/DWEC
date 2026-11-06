const obTarifa = { rata: 6, mono: 12, bisonte: 30 };

class ErrorTarifa extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorTarifa";
    }
}

class Terminal {
    constructor(numero) {
        this.numero = numero;
        this.tiempo = 0;
        this.llamadas = [];   // historial

    }

    get getnumero() {
        return this.numero;
    }

    set setNumero(numero) {
        this.numero = numero;
    }

    get getTiempo() {
        return this.tiempo;
    }

    set setTiempo(tiempo) {
        this.tiempo += tiempo;
    }

    llama(terminal, tiempo) {
        terminal.setTiempo = tiempo;
        this.setTiempo = tiempo;
        this.llamadas.push({ con: terminal.numero, segundos: tiempo, tipo: "saliente" });
        terminal.llamadas.push({ con: this.numero, segundos: tiempo, tipo: "entrante" });
    }
}

class Movil extends Terminal {
    constructor(numero, tarifa) {
        super(numero);
        this.setTarifa = tarifa;
        this.tarificado = 0;
    }

    get getTarifa() {
        return this.tarifa;
    }

    get getTarificado() {
        return this.tarificado;
    }

    set setTarifa(tarifa) {
        let resultado = false;

        for (const key in obTarifa) {
            if (key == tarifa) {
                this.tarifa = tarifa;
                resultado = true;
            }
        }

        if (!resultado) {
            throw new ErrorTarifa("Error de tarifa");
        }
    }

    llama(terminal, tiempo) {
        super.llama(terminal, tiempo);
        let minutos = this.getTiempo / 60;
        this.tarificado = (minutos * obTarifa[this.getTarifa]) / 100;

        // switch(this.tarifa){
        //     case "rata":
        //         this.tarificado = minutos * 0.06;
        //         break;
        // }

    }


}

class Compania {
    constructor() {
        this.moviles = [];
    }

    aniadirMovil(movil) {
        this.moviles.push(movil);
    }

    totalDinero() {
        let totalTarifa = 0;
        for (const v of this.moviles) {
            totalTarifa += v.getTarificado;
        }

        return totalTarifa;
    }

    mostrarClientes() {
        for (const valor of this.moviles) {
            console.log(valor);
        }
    }

    mostrarConversacion(numero) {
        const movil = this.moviles.find(m => m.numero === numero);
        if (!movil) {
            console.log("Número no encontrado");
            return;
        }

        for (const l of movil.llamadas) {
            console.log(`${l.tipo} - ${l.con} - ${l.segundos}s`);
        }
    }


}

try {
    let t1 = new Terminal("678 11 22 33");
    let t2 = new Terminal("644 74 44 69");
    let t3 = new Terminal("622 32 89 09");
    let t4 = new Terminal("664 73 98 18");
    console.log(t1);
    console.log(t2);
    t1.llama(t2, 320);
    t1.llama(t3, 200);
    console.log(t1);
    console.log(t2);
    console.log(t3);
    console.log(t4);

    let m1 = new Movil("678 11 22 33", "rata");
    let m2 = new Movil("644 74 44 69", "mono");
    let m3 = new Movil("622 32 89 09", "bisonte");
    console.log(m1);
    console.log(m2);
    m1.llama(m2, 320);
    m1.llama(m3, 200);
    m2.llama(m3, 550);
    console.log(m1);
    console.log(m2);
    console.log(m3);

    //let m4 = new Movil("622 32 89 09", "bi");

    let c = new Compania();
    c.aniadirMovil(m1);
    c.aniadirMovil(m2);
    c.aniadirMovil(m3);

    let total = c.totalDinero();
    console.log(total);
    c.mostrarClientes();
    c.mostrarConversacion("678 11 22 33");


} catch (error) {
    console.log(error.message);
}


