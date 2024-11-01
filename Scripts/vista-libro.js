const estrella = document.getElementById("estrella")
estrella.onclick = function () {
    const icono = document.getElementById("icono")
    if (icono.classList.contains("bi-star")) {
        icono.classList.remove("bi-star")
        icono.classList.add("bi-star-fill")
    } else if (icono.classList.contains("bi-star-fill")) {
        icono.classList.remove("bi-star-fill")
        icono.classList.add("bi-star")
    }
}
