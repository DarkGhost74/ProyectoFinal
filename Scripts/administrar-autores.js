$(document).ready(function () {
    for (let i = 0; i < 50; i++) {
        let objeto = `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td>Chalino Sánchez</td>
                    <td><img src="../Imagenes/Prueba/Autores/Stephen King.jpg" alt="" class="autor"></td>
                    <td>${i + 13}</td>
                    <td><button type="button" class="btn btn-dark">Info</button></td>
                    <td><button type="button" class="btn btn-dark">Editar</button></td>
                    <td><button type="button" class="btn btn-dark">Eliminar</button></td>
                </tr>
            `;
        $("#contenido").append(objeto)
    }
})
