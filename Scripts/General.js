var RolId = 1

if (RolId == 1) {
    const adminBtns = document.querySelectorAll('.admin');
    adminBtns.forEach(boton => {
        boton.classList.toggle("admin")
    });
}

document.querySelector(".btn-outline-success").addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "resultado-busqueda.html"
})