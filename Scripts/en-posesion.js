$(document).ready(function () {
    for (let i = 0; i < 8; i++) {
        let libro = `
                <div class="card">
                    <a href="vista-libro.html" class="card-link">
                        <img src="../Imagenes/Prueba/Los ojos de mona.png" class="card-img-top libro" alt="...">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">Los ojos de mona</h5>
                        <h6 class="card-subtitle text-body-secondary">Fecha de devolución:</h6>
                        <p class="card-text">18/octubre/2024</p>
                    </div>
                </div>
            `;
        $("#libros").append(libro)
    }
    for (let i = 0; i < 7; i++) {
        let folio = `
                <div class="card">
                    <a href="vista-libro.html" class="card-link">
                        <img src="../Imagenes/Prueba/Los ojos de mona.png" class="card-img-top libro" alt="...">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">Los ojos de mona</h5>
                        <p class="card-text">Folio: <small class="text-body-secondary">${i * 74 + 100000}</small></p>
                    </div>
                </div>
            `;
        $("#folios").append(folio)
    }
})