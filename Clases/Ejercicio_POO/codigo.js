//Ejemplo Cuenta corriente
//Objeto Cuenta Corriente
var cuentaCorriente = new Cuenta2("Pepillo el de los Palotes", "111-11", 1000.00, 0.01);
var cuentaDestino = new Cuenta1();
var cuentaPrueba = new Cuenta3(cuentaCorriente);
//Métodos
//Contructores
//Constructor por defecto
function Cuenta1(){
    this.nombre = "";
    this.numero = "";
    this.saldo = 0.0;
    this.interes = 0.0;
}

//Constructor con parámetros
function Cuenta2(nombre,numCuenta,saldo,interes){
    this.nombre = nombre;
    this.numero = numCuenta;
    this.saldo = saldo;
    this.interes = interes;
}

//Constructor copia
function Cuenta3(c){
    this.nombre = c.nombre;
    this.numero = c.numero;
    this.saldo = c.saldo;
    this.interes = c.interes;
}
//geters
cuentaCorriente.getNombre = function(){
    return this.nombre;
}
cuentaCorriente.getNumero = function(){
    return this.numero;
}
cuentaCorriente.getSaldo = function(){
    return this.saldo;
}
cuentaCorriente.getInteres = function(){
    return this.interes;
}
//setters
cuentaCorriente.setNombre = function(nombre){
    this.nombre = nombre;
}
cuentaCorriente.setNumero = function(numero){
    this.numero = numero;
}
cuentaCorriente.setSaldo = function(saldo){
    this.saldo = saldo;
}
cuentaCorriente.setInteres = function(interes){
    this.interes = interes;
}

//Ingreso
cuentaCorriente.ingreso = function(cantidad){
    if (cantidad <= 0) {
        console.log("Cantidad Incorrecta");
    } else {
        cuentaCorriente.saldo += cantidad;
        console.log(cuentaCorriente.saldo);
    }
}

//Reintegro
cuentaCorriente.reintegro = function(cantidad){
    comprobacionSaldo = cuentaCorriente.saldo - cantidad;
    
    if (comprobacionSaldo < 0) {
        console.log("No tienes suficiente saldo");
    } else {
        cuentaCorriente.saldo -= cantidad;
        console.log(cuentaCorriente.saldo);
    }
}

//Transferencia
cuentaCorriente.transferencia = function(cuentaDestino, importe){
    comprobacionCuenta = cuentaCorriente.saldo - importe;

    if (comprobacionCuenta < 0) {
        console.log("SALDO INSUFICIENTE");
    } else {
        cuentaCorriente.saldo -= importe;
        cuentaDestino.saldo += importe;
        console.log(cuentaCorriente.saldo);
        console.log(cuentaDestino.saldo);
    }
}

//Ejemplos de uso
console.log(cuentaCorriente.getNombre());

cuentaCorriente.ingreso(5);
cuentaCorriente.reintegro(20);
cuentaCorriente.transferencia(cuentaDestino, 500);

//Array de 3 cuentas y mostrar el nombre y el saldo de la persona con mas dinero
var banco = [cuentaCorriente, cuentaDestino, cuentaPrueba];

function masDinero(banco) {
    var cuentaMayor;
    var saldoCuenta = 0;
    for (const cuenta of banco) {
        if (saldoCuenta < cuenta.) {
            
        }
    }
}
