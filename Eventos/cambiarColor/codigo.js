let caja = document.getElementById("caja")

caja.addEventListener("mouseover", ()=> {
    caja.style.backgroundColor = "blue";
});

caja.addEventListener("mouseout", ()=> {
    caja.style.backgroundColor = "revert";
});

caja.addEventListener("click", ()=> {
    caja.style.backgroundColor = "red";
});

caja.addEventListener("dblclick", ()=> {
    caja.style.backgroundColor = "green";
});