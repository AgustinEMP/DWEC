let fecha = new Tiempo(2022, 12, 15, 22, 15, 22);
let fecha2 = new Tiempo(2023, 5, 20, 10, 30, 40);
let fechaActual = new Tiempo(0, 0, 0, 0, 0, 0);

function Tiempo(anio, mes, dia, hora, minuto, segundo) {

    if (anio == 0 && mes == 0 && dia == 0 &&
        hora == 0 && minuto == 0 && segundo == 0) {

        let ahora = new Date();

        this.anio = ahora.getFullYear();
        this.mes = ahora.getMonth() + 1;
        this.dia = ahora.getDate();
        this.hora = ahora.getHours();
        this.minuto = ahora.getMinutes();
        this.segundo = ahora.getSeconds();

    } else {

        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    this.getAnio = getAnio;
    this.getMes = getMes;
    this.getDia = getDia;
    this.getHora = getHora;
    this.getMinuto = getMinuto;
    this.getSegundo = getSegundo;

    this.setAnio = setAnio;
    this.setMes = setMes;
    this.setDia = setDia;
    this.setHora = setHora;
    this.setMinuto = setMinuto;
    this.setSegundo = setSegundo;

    this.getFechaCompleta = getFechaCompleta;
    this.getHoraCompleta = getHoraCompleta;
    this.esBisiesto = esBisiesto;
    this.esMayor = esMayor;
    this.esMenor = esMenor;
    this.esIgual = esIgual;
    this.sumaHora = sumaHora;

}

function getAnio() {
    return this.anio;
}

function getMes() {
    return this.mes;
}

function getDia() {
    return this.dia;
}

function getHora() {
    return this.hora;
}

function getMinuto() {
    return this.minuto;
}

function getSegundo() {
    return this.segundo;
}

function getFechaCompleta() {
    return this.dia + "/" + this.mes + "/" + this.anio;
}

function getHoraCompleta() {
    return this.hora + ":" + this.minuto + ":" + this.segundo;
}

function setAnio(anio) {
    return this.anio = anio;
}

function setMes(mes) {
    return this.mes = mes;
}

function setDia(dia) {
    return this.dia = dia;
}

function setHora(hora) {
    return this.hora = hora;
}

function setMinuto(minuto) {
    return this.minuto = minuto;
}

function setSegundo(segundo) {
    return this.segundo = segundo;
}

function esBisiesto() {

    if (this.anio % 400 == 0) {
        return true;
    }

    if (this.anio % 100 == 0) {
        return false;
    }

    if (this.anio % 4 == 0) {
        return true;
    }

    return false;
}

function esMayor(otroTiempo) {

    if (this.anio > otroTiempo.anio) {
        return true;
    }

    if (this.anio < otroTiempo.anio) {
        return false;
    }


    if (this.mes > otroTiempo.mes) {
        return true;
    }

    if (this.mes < otroTiempo.mes) {
        return false;
    }


    if (this.dia > otroTiempo.dia) {
        return true;
    }

    if (this.dia < otroTiempo.dia) {
        return false;
    }


    if (this.hora > otroTiempo.hora) {
        return true;
    }

    if (this.hora < otroTiempo.hora) {
        return false;
    }


    if (this.minuto > otroTiempo.minuto) {
        return true;
    }

    if (this.minuto < otroTiempo.minuto) {
        return false;
    }


    if (this.segundo > otroTiempo.segundo) {
        return true;
    }

    return false;
}

function esMenor(otroTiempo) {

    if (this.anio < otroTiempo.anio) {
        return true;
    }

    if (this.anio > otroTiempo.anio) {
        return false;
    }


    if (this.mes < otroTiempo.mes) {
        return true;
    }

    if (this.mes > otroTiempo.mes) {
        return false;
    }


    if (this.dia < otroTiempo.dia) {
        return true;
    }

    if (this.dia > otroTiempo.dia) {
        return false;
    }


    if (this.hora < otroTiempo.hora) {
        return true;
    }

    if (this.hora > otroTiempo.hora) {
        return false;
    }


    if (this.minuto < otroTiempo.minuto) {
        return true;
    }

    if (this.minuto > otroTiempo.minuto) {
        return false;
    }


    if (this.segundo < otroTiempo.segundo) {
        return true;
    }

    return false;
}

function esIgual(otroTiempo) {

    return this.anio == otroTiempo.anio &&
        this.mes == otroTiempo.mes &&
        this.dia == otroTiempo.dia &&
        this.hora == otroTiempo.hora &&
        this.minuto == otroTiempo.minuto &&
        this.segundo == otroTiempo.segundo;
}

function sumaHora(otroTiempo) {

    this.hora = this.hora + otroTiempo.hora;
    this.minuto = this.minuto + otroTiempo.minuto;
    this.segundo = this.segundo + otroTiempo.segundo;

    if (this.segundo >= 60) {
        this.minuto = this.minuto + Math.floor(this.segundo / 60);
        this.segundo = this.segundo % 60;
    }

    if (this.minuto >= 60) {
        this.hora = this.hora + Math.floor(this.minuto / 60);
        this.minuto = this.minuto % 60;
    }

    if (this.hora >= 24) {
        this.hora = this.hora % 24;
    }
}

console.log(fecha.getFechaCompleta());
console.log(fecha.getHoraCompleta());
console.log(fechaActual.getFechaCompleta());
console.log(fechaActual.getHoraCompleta());

console.log("----- BISIESTO -----");

console.log("¿2025 es bisiesto?", fecha.esBisiesto());


console.log("----- COMPARACIONES -----");

console.log("¿fecha es mayor que fecha2?", fecha.esMayor(fecha2));
console.log("¿fecha es menor que fecha2?", fecha.esMenor(fecha2));
console.log("¿fecha es igual que fecha2?", fecha.esIgual(fecha2));


console.log("----- SUMA DE HORA -----");

console.log("Hora antes de sumar:", fecha.getHoraCompleta());

fecha.sumaHora(fecha2);

console.log("Hora después de sumar:", fecha.getHoraCompleta());