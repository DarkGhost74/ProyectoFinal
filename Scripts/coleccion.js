$(document).ready(function () {
    for (let i = 0; i < 8; i++) {
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
        $("#libros").append(libro)
    }
    for (let i = 0; i < 7; i++) {
        let autor = `
                <div class="card border-0">
                    <a href="" class="card-link">
                        <img src="../Imagenes/Prueba/Autores/Stephen King.jpg" class="card-img-top rounded-circle" alt="...">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title text-center">Stephen King</h5>
                    </div>
                </div>
            `;
        $("#autores").append(autor)
    }
})