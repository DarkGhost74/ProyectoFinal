$(document).ready(function () {
    for (let i = 0; i < 50; i++) {
        let objeto = `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td>Rosalino</td>
                    <td>Sánchez Félix</td>
                    <td>contacto@chalino.com</td>
                    <td>31</td>
                    <td>Hombre</td>
                    <td>Administrador</td>
                    <td><img src="../Imagenes/Prueba/Autores/Julio Verne.jpeg" alt="" class="usuario rounded-circle"></td>
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
                    <td><button type="button" class="btn btn-dark">Eliminar</button></td>
                </tr>
            `;
        $("#contenido").append(objeto)
    }
})
