/*VISUAL ANTALITICO Y MINIMALISTA*/
const botonCategorias = document.querySelector(".clickeable");
const contenedorTags = document.querySelector(".contenedor-categorias");
const tags = document.querySelectorAll(".categoria");
const imagenes = document.querySelectorAll(".imagenes");
const spanTitulo = document.querySelector(".efecto-titulo");

//EVENT LISTENER CATEGORIAS

botonCategorias.addEventListener("click", (e) => {
  e.preventDefault;
  contenedorTags.classList.toggle("display");
});

//EVENT LISTENER FILTRO

tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    const valorData = e.target.dataset.filter;
    imagenes.forEach((imagen) => {
      if (valorData == "todos") {
        imagen.style.display = "block";
      } else if (valorData == imagen.dataset.item) {
        imagen.style.display = "block";
      } else {
        imagen.style.display = "none";
      }
    });
  });
});

//SET TIMER CAMBIO DE PALABRA DEL TITULO
let contador = 0;

function cambiarNombre() {
  const palabras = ["analiticos", "minimalistas", "visuales"];

  spanTitulo.textContent = palabras[contador];

  contador++;
  if (contador > 2) {
    contador = 0;
  }
}

setInterval(cambiarNombre, 2000);
