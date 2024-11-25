$(document).ready(function () {
    for (let i = 0; i < 50; i++) {
        let objeto = `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td>Misterio</td>
                    <td>${i + 13}</td>
                    <td><a href="explorar-un-genero.html" type="button" class="btn btn-dark"><i class="bi bi-info-circle"></i> Info</a></td>
                    <td><a href="crear-editar-genero.html" type="button" class="btn btn-dark"><i class="bi bi-pencil"></i> Editar</a></td>
                    <td><a type="button" class="btn btn-dark eliminar-btn" href="#" data-bs-toggle="modal" data-bs-target="#modalEliminar"><i class="bi bi-trash me-1"></i>Eliminar</a></td>
                </tr>
            `;
        $("#contenido").append(objeto)
    }
    let rowToDelete
    $("#contenido").on("click", ".eliminar-btn", function () {
        rowToDelete = $(this).closest("tr")
    });
    $("#footerEliminar .btn-danger").on("click", function () {
        if (rowToDelete) {
            rowToDelete.remove()
            rowToDelete = null
        }
    })
})