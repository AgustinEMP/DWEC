function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

  const expires = "expires=" + d.toUTCString();
  const value = encodeURIComponent(JSON.stringify(cvalue));

  document.cookie = cname + "=" + value + ";" + expires + ";path=/";
}

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

var carrito = getCookie("carrito");

if (carrito == null) {
  carrito = [];
}
var cantidad = document.getElementById("cantidad");
var producto = document.getElementById("producto");

var btnComprar = document.getElementById("comprar");
var btnVer = document.getElementById("verCarrito");

if (btnComprar) {
  btnComprar.addEventListener("click", function () {
    if (cantidad.value == "" || producto.value == "") {
      console.log("Rellena la cantidad y el producto.");
    } else {
      carrito.push({
        cantidad: parseInt(cantidad.value),
        producto: producto.value
      });

      setCookie("carrito", carrito, 7);

      cantidad.value = "";
      producto.value = "";
    }
  });
}

if (btnVer) {
  btnVer.addEventListener("click", function () {
    var datos = getCookie("carrito");
    var total = 0;

    if (datos == null) {
      console.log("El carrito está vacío.");
    } else {
      datos.forEach(function (e) {
        console.log(e.cantidad + " " + e.producto);
        total += e.cantidad;
      });
      console.log("El total es: " + total);
    }
  });
}