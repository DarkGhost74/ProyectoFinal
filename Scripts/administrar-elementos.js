$(document).ready(function () {
    for (let i = 0; i < 50; i++) {
        let elemento = `
                <tr>
                    <th scope="row">${i+1}</th>
                    <td>Harry Potter y la piedra filosofal</td>
                    <td>J. K. Rowlin</td>
                    <td>Misterio</td>
                    <td>${i+13}</td>
                    <td><img src="../Imagenes/Prueba/Harry Potter y la piedra filosofal.png" alt="" class="libro"></td>
                    <td>El contenido variará dependiendo de si son los autores, libros o usuarios, así como también la cantidad de columnas</td>
                    <td>Esta tambien</td>
                    <td>
                        <div class="dropdown">
                            <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Rol
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Lector</a></li>
                                <li><a class="dropdown-item" href="#">Administrador</a></li>
                            </ul>
                        </div>
                    </td>
                    <td><button type="button" class="btn btn-dark">Info</button></td>
                    <td><button type="button" class="btn btn-dark">Editar</button></td>
                    <td><button type="button" class="btn btn-dark">Eliminar</button></td>
                </tr>
            `;
        $("#contenido").append(elemento)
    }
})