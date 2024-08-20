const botón = document.getElementById("confirmar");

botón.addEventListener("click", () => {
    const nuevoElemento = document.getElementById("nuevoElemento")
    if (nuevoElemento.value !== "") {
        const lista = document.getElementById("lista");
        const elem = document.createElement("li");
        elem.innerHTML = nuevoElemento.value;
        lista.appendChild(elem);
    }
});
