const botones = document.querySelectorAll(".btns");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const url = boton.getAttribute("data-pantalla");
        window.location.href = url;
    });
});