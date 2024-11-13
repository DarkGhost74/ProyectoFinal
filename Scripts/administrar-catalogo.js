$(document).ready(function () {
    for (let i = 0; i < 50; i++) {
        let objeto = `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td>Harry Potter y la piedra filosofal</td>
                    <td>J. K. Rowlin</td>
                    <td>Misterio</td>
                    <td>Libros patito</td>
                    <td>${i + 13}</td>
                    <td><img src="../Imagenes/Prueba/Harry Potter y la piedra filosofal.png" alt="" class="libro"></td>
                    <td>11/Septiembre/2001</td>
                    <td><button type="button" class="btn btn-dark">Info</button></td>
                    <td><a href="crear-editar-libro.html" type="button" class="btn btn-dark">Editar</a></td>
                    <td><button type="button" class="btn btn-dark">Eliminar</button></td>
                </tr>
            `;
        $("#contenido").append(objeto)
    }
})