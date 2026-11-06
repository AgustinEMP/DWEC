let aniadir = document.getElementById("aniadir");
let restar = document.getElementById("restar");
let reiniciar = document.getElementById("reiniciar");
let parrafo = document.getElementById("parrafo");
let cont = 0;

parrafo.innerHTML = cont;

aniadir.addEventListener("click", ()=> {
    cont++;
    parrafo.innerHTML = cont;
});

restar.addEventListener("click", ()=> {
    cont--;
    parrafo.innerHTML = cont;
});

reiniciar.addEventListener("click", ()=> {
    cont = 0;
    parrafo.innerHTML = cont;
});