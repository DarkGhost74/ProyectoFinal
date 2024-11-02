var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;

$(document).ready(function () {
  function ajustarBotones() {
    const botones = document.querySelectorAll('.genero');
    if (window.innerWidth < 576) {
      botones.forEach((boton) => {
        boton.classList.remove('genero');
        boton.classList.add('generoxs');
      });
      scrollPosition = 0;
    }
    const botonesxs = document.querySelectorAll('.generoxs');
    if (window.innerWidth >= 576) {
      botonesxs.forEach((boton) => {
        boton.classList.remove('generoxs');
        boton.classList.add('genero');
      });
    }
  }
  $(window).on("resize", ajustarBotones);
  ajustarBotones();
  actualizarContenido("1");

  document.querySelectorAll('.btn-lg').forEach(button => {
    button.addEventListener('click', (event) => {
      const generoId = event.target.id;
      actualizarContenido(generoId);
      document.querySelectorAll('.btn-lg').forEach(btn => {
        btn.classList.remove('generoselect');
      });
      event.target.classList.add('generoselect');
    });
  });
});

function actualizarContenido(generoId) {
  const contenidoGenero = document.getElementById('contenidoGenero');
  $("#contenidoGenero").empty();
  switch (generoId) {
    case "1":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/Ana de las tejas verdes.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 1</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "2":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/Batman Demned.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 2</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "3":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/El diario de Ana Frank.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 3</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "4":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/El libro de Bill.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 4</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "5":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/El principito.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 5</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "6":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/Harry Potter y la piedra filosofal.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 6</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "7":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/It.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 7</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "8":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/La niebla.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 8</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "9":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/Los ojos de mona.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 9</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    case "10":
      for (let i = 0; i < 10; i++) {
        let libro = `
              <div class="card">
                  <a href="vista-libro.html" class="card-link">
                      <img src="../Imagenes/Prueba/Lugares asombrosos.png" class="card-img-top libro" alt="...">
                  </a>
                  <div class="card-body">
                      <h5 class="card-title">Genero 10</h5>
                  </div>
              </div>
            `;
        $("#contenidoGenero").append(libro)
      }
      break;
    default:
      contenidoGenero.innerHTML = '<p>Contenido no disponible.</p>';
      break;
  }
}

$(".carousel-control-next").on("click", function () {
  if (window.innerWidth >= 1570) {
    if (scrollPosition < (carouselWidth - cardWidth * 7)) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  } else if (window.innerWidth < 1570 && window.innerWidth >= 1390) {
    if (scrollPosition < (carouselWidth - cardWidth * 6)) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  } else if (window.innerWidth < 1390 && window.innerWidth >= 1210) {
    if (scrollPosition < (carouselWidth - cardWidth * 5)) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  } else if (window.innerWidth < 1210 && window.innerWidth >= 768) {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  } else if (window.innerWidth < 768 && window.innerWidth >= 576) {
    if (scrollPosition < (carouselWidth - cardWidth * 3)) {
      scrollPosition += cardWidth * 2;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  }
  else if (window.innerWidth < 576) {
    let cardWidth1 = $(".carousel-item").width();
    if (scrollPosition < (carouselWidth - cardWidth1 * 3)) {
      scrollPosition += cardWidth1 * 2;
      if (scrollPosition < cardWidth1 * 10) {
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
      }
    }
  }
});

$(".carousel-control-prev").on("click", function () {
  if (window.innerWidth >= 768) {
    if (scrollPosition > 1) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  } else if (window.innerWidth < 768 && window.innerWidth >= 576) {
    if (scrollPosition > 1) {
      scrollPosition -= cardWidth * 2;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  } else if (window.innerWidth < 576) {
    let cardWidth1 = $(".carousel-item").width();
    if (scrollPosition > 1) {
      scrollPosition -= cardWidth1 * 2;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  }
});