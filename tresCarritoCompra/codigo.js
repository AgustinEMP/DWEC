var carrito = [];
var cantidad = document.getElementById("cantidad");
var producto = document.getElementById("producto");

document.getElementById("comprar").addEventListener("click", function () {
  carrito.push({
    cantidad: cantidad.value,
    producto: producto.value
  });
});

document.getElementById("verCarrito").addEventListener("click", function () {
  var total = 0;
  carrito.forEach(e => {
    console.log(e.cantidad, e.producto);
    total += parseInt(e.cantidad);
  });
  console.log("El total es: " + total);
});



//FUNCION PARA CREAR LA COOKIE
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

  const expires = "expires=" + d.toUTCString();
  const value = encodeURIComponent(JSON.stringify(cvalue));

  document.cookie = cname + "=" + value + ";" + expires + ";path=/";
}

// FUNCION PARA LEER LA COOKIE
function getCookie(cname) {
  const name = cname + "=";
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();

    if (c.indexOf(name) === 0) {
      const value = decodeURIComponent(c.substring(name.length));

      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  }

  return null;
}


//creamos la cookie
setCookie("comida", "manzanas", 7);

setCookie("carrito", JSON.stringify(carrito), 7);

//leemos la cookie
console.log("El valor de comida es: " + getCookie("comida"));

setCookie("comida", "churros", 7);
var valor = getCookie("comida");
var guardado = getCookie("carrito");
console.log("El valor de comida es: " + valor);


