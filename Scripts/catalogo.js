$(document).ready(function () {
    let btnMas = document.getElementById("btnMas")
    btnMas.addEventListener('click', (event) => {
        mostrarLibros()
    });
    for (let i = 0; i < 10; i++) {
        let autor = `
                <li><a class="dropdown-item" href="#">Autor ${i}</a></li>
            `;
        $("#listaAutor").append(autor)
    }
    for (let i = 0; i < 10; i++) {
        let genero = `
                <li><a class="dropdown-item" href="#">Género ${i}</a></li>
            `;
        $("#listaGenero").append(genero)
    }
    mostrarLibros()
})
function mostrarLibros() {
    for (let i = 0; i < 50; i++) {
        let libro = `
                <div class="card">
                    <a href="vista-libro.html" class="card-link">
                        <img src="../Imagenes/Prueba/Los ojos de mona.png" class="card-img-top libro" alt="...">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">Los ojos de mona</h5>
                    </div>
                </div>
            `;
        $("#contenido").append(libro)
    }
}