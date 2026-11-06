let tom = document.querySelector("img");
let miVentana = document.querySelector("html");

miVentana.addEventListener("keydown", (contexto) => {
    if (contexto.key === "ArrowRight") {
        tom.style.left = parseInt(tom.style.left) + 10 + "px";
        if (tom.src != "tomMoviendose.gif") {
            tom.src = "tomMoviendose.gif"
        }
    } else if (contexto.key == "ArrowLeft") {
        if (parseInt(tom.style.left) != 0) {
            tom.style.left = parseInt(tom.style.left) - 10 + "px";
            if (tom.src != "tomMoviendose.gif") {
                tom.src = "tomMoviendose.gif"
            }

        }
    } else if (contexto.key == "ArrowUp") {
        tom.style.top = parseInt(tom.style.top) - 10 + "px";
        if (tom.src != "tomMoviendose.gif") {
            tom.src = "tomMoviendose.gif"
        }

    } else if (contexto.key == "ArrowDown") {
        tom.style.top = parseInt(tom.style.top) + 10 + "px";
        if (tom.src != "tomMoviendose.gif") {
            tom.src = "tomMoviendose.gif"
        }

    }
});

miVentana.addEventListener("keyup", () => {
    tom.src = "tom.avif"
});


let btnTom = document.getElementById("btnTom");

btnTom.addEventListener("click", () => {
});

let btnTomMovimiento = document.getElementById("btnTomMovimiento");

btnTomMovimiento.addEventListener("click", () => {
    tom.src = "tomMoviendose.gif"
});

