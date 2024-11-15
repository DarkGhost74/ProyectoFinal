const generos = [
    "Literatura Infantil", "Fantasía", "Autobiográfica", "Científico", "Cuento",
    "Poesía", "Novela", "Romántico", "Leyenda", "Terror", "Thriller o Suspense",
    "Ciencia Ficción", "Distopía", "Aventuras", "Contemporáneo", "Paranormal",
    "Juvenil", "Autoayuda y Superación Personal", "Salud y Deporte", "Libros Prácticos o Manuales",
    "Memorias", "Biografías", "Cocina", "Viajes"
];

let cantidadMostrar = 6; 

function cargarGeneros() {
    const contenedor = document.getElementById("generosContainer");
    contenedor.innerHTML = ''; 

    for (let i = 0; i < cantidadMostrar; i++) {
        if (i < generos.length) {
            const generoButton = document.createElement("button");
            generoButton.classList.add("genero");
            generoButton.textContent = generos[i];
            generoButton.onclick = function () {
                const generoUrl = "explorar-un-genero.html?genero=" + encodeURIComponent(generos[i]);
                window.location.href = generoUrl;
            };
            contenedor.appendChild(generoButton);
        }
    }

    if (cantidadMostrar >= generos.length) {
        document.getElementById("mostrarMasBtn").style.display = "none";
    }
}

function mostrarMas() {
    cantidadMostrar += 6; 
    cargarGeneros(); 
}

cargarGeneros();
