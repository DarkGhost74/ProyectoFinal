$(document).ready(function () {
    var prestado = 0
    var entregado = 1
    var prestadoText = ""
    var entregadoText = ""
    for (let i = 0; i < 50; i++) {
        if (prestado==0) {
            prestadoText = "btn-success"
        } else {
            prestadoText = "btn-danger"
        }
        if (entregado==0) {
            entregadoText = "btn-success"
        } else {
            entregadoText = "btn-danger"
        }
        let objeto = `
                <tr>
                    <th scope="row">${i + 123456}</th>
                    <td>11/Septiembre/2001</td>
                    <td>10/noviembre/2024</td>
                    <td>Rosalino Sánchez Felix</td>
                    <td>El diario de Ana Frank</td>
                    <td>
                        <div class="dropdown">
                            <a class="btn ${prestadoText} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Prestado
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">No prestado</a></li>
                                <li><a class="dropdown-item" href="#">Prestado</a></li>
                            </ul>
                        </div>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a class="btn ${entregadoText} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                No entregado
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">No entregado</a></li>
                                <li><a class="dropdown-item" href="#">Entregado</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            `;
        $("#contenido").append(objeto)
    }
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function () {
            event.preventDefault()
            let dropdownButton = this.closest('.dropdown').querySelector('.dropdown-toggle');
            dropdownButton.textContent = this.textContent;
            dropdownButton.classList.remove('btn-success', 'btn-danger');
            if (this.textContent === 'No prestado' || this.textContent === 'No entregado') {
                dropdownButton.classList.add('btn-danger');
            } else if (this.textContent === 'Prestado' || this.textContent === 'Entregado') {
                dropdownButton.classList.add('btn-success');
            }
        });
    });
})