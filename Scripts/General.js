var RolId = 1

if (RolId == 1) {
    const adminBtns = document.querySelectorAll('.admin');
    adminBtns.forEach(boton => {
        boton.classList.toggle("admin")
    });
}