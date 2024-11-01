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

  document.querySelectorAll('.genero').forEach(button => {
    button.addEventListener('click', (event) => {
      const generoSeleccionado = event.target.textContent.trim();
      const contenidoGenero = document.getElementById('contenidoGenero');

      // Cambia el contenido según el género seleccionado
      switch (generoSeleccionado) {
        case 'Literatura infantil':
          contenidoGenero.innerHTML = '<p>Contenido para Literatura infantil.</p>';
          break;
        case 'Fantasía':
          contenidoGenero.innerHTML = '<p>Contenido para Fantasía.</p>';
          break;
        case 'Autobiografía':
          contenidoGenero.innerHTML = '<p>Contenido para Autobiografía.</p>';
          break;
        case 'Científico':
          contenidoGenero.innerHTML = '<p>Contenido para Científico.</p>';
          break;
        case 'Cuentos':
          contenidoGenero.innerHTML = '<p>Contenido para Cuentos.</p>';
          break;
        case 'Poesía':
          contenidoGenero.innerHTML = '<p>Contenido para Poesía.</p>';
          break;
        case 'Fantasía y aventura':
          contenidoGenero.innerHTML = '<p>Contenido para Fantasía y aventura.</p>';
          break;
        case 'Fin':
          contenidoGenero.innerHTML = '<p>Contenido para el Fin.</p>';
          break;
        default:
          contenidoGenero.innerHTML = '<p>Contenido no disponible.</p>';
          break;
      }
    });
  });
});

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
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
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