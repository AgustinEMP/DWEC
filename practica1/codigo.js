let boton = document.getElementById("btn");
boton.addEventListener("click",
    function () {
        let s1 = document.getElementById("musicTypes");
        let s2 = document.getElementById("vacio");
        for (let i = 0; s1.options.length; i++) {
            if (s1.options[i].selected) {
                s2.appendChild(s1.options[i]);
            }

        }
    }

);