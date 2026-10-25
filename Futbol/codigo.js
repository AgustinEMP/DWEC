let dorsales = [];

class ErrorDorsal extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorDorsal";
    }
}

class ErrorEquipo extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorEquipo";
    }
}

class Jugador {

    constructor(dorsal, nombreCompleto) {
        this.setDorsal(dorsal);
        this.nombreCompleto = nombreCompleto;
        this.estadistica = {};
    }

    getDorsal() {
        return this.dorsal;
    }

    getNombreCompleto() {
        return this.nombreCompleto;
    }

    getEstadisticas() {
        return this.estadistica;
    }

    setDorsal(dorsal) {
        if (!dorsales.includes(dorsal) && dorsal >= 0) {
            dorsales.push(dorsal);
            this.dorsal = dorsal;
        } else {
            throw new ErrorDorsal("Error de dorsal");
        }
    }

    setNombrecompleto(nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    añadirgolesporPartidos(partido, goles) {
        this.getEstadisticas()[partido] = goles;
    }

    obtenerGoles(partido) {
        let gol = this.getEstadisticas()[partido];
        return gol;
    }
}

class Equipo {
    constructor(Jugador) {
        this.jugadores = [];
    }

    getJugadores() {
        return this.jugadores;
    }

    aniadirJugador(jugador) {
        let repetido = false;

        for (let i = 0; i < this.getJugadores().length; i++) {
            if (
                this.getJugadores()[i] === jugador ||
                this.getJugadores()[i].getDorsal() === jugador.getDorsal()
            ) {
                repetido = true;
                break;
            }
        }

        if (repetido) {
            throw new ErrorEquipo(
                "El jugador ya está en el equipo o su dorsal está repetido"
            );
        } else {
            this.getJugadores().push(jugador);
        }
    }


    borrarJugador(jugador) {
        let indice = -1;

        // Buscar al jugador recorriendo el array
        for (let i = 0; i < this.getJugadores().length; i++) {
            if (this.getJugadores()[i] === jugador) {
                indice = i;
                break;
            }
        }

        if (indice !== -1) {
            this.getJugadores().splice(indice, 1);
        } else {
            console.log("No existe el jugador en ese equipo");
        }
    }

}


try {

    //Creacion de jugadores
    const j1 = new Jugador(1, "Antonio Maraca");
    const j2 = new Jugador(2, "Armando Guerra");
    const j3 = new Jugador(3, "Paco Fiestas");

    const j4 = new Jugador(4, "Elba Jonazo");
    const j5 = new Jugador(5, "Juan Piezas");
    const j6 = new Jugador(6, "Camaron Segundo");

    //Creacion de equipo
    const eq1 = new Equipo();
    const eq2 = new Equipo();


    //Añadir jugadores al equipo
    eq1.aniadirJugador(j1);
    eq1.aniadirJugador(j2);
    eq1.aniadirJugador(j3);

    eq2.aniadirJugador(j4);
    eq2.aniadirJugador(j5);
    eq2.aniadirJugador(j6);


    //Añadir goles a los partidos
    j1.añadirgolesporPartidos(1, 2);
    j2.añadirgolesporPartidos(1, 3);
    j3.añadirgolesporPartidos(1, 0);

    j1.añadirgolesporPartidos(2, 1);
    j2.añadirgolesporPartidos(2, 0);
    j3.añadirgolesporPartidos(2, 2);

    j4.añadirgolesporPartidos(1, 6);
    j5.añadirgolesporPartidos(1, 5);
    j6.añadirgolesporPartidos(1, 2);

    j4.añadirgolesporPartidos(2, 4);
    j5.añadirgolesporPartidos(2, 7);
    j6.añadirgolesporPartidos(2, 8);

    function mostrarGoles(Jugador) {
        console.log("\n===== ESTADISTICASD DE PARTIDOS =====");
        console.log("Dorsal --> " + Jugador.getDorsal());
        console.log("Nombre y Apellido --> " + Jugador.getNombreCompleto());
        console.log("Partido ---> Goles");
        console.log("1  " + "-  " + Jugador.obtenerGoles(1));
        console.log("2  " + "-  " + Jugador.obtenerGoles(2));
    }

    //Mostrar goles
    mostrarGoles(j1);
    mostrarGoles(j2);
    mostrarGoles(j5);





} catch (error) {
    console.log(error.message);
}