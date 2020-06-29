/*VISUAL ANTALITICO Y MINIMALISTA*/
const botonCategorias = document.querySelector(".clickeable");
const contenedorTags = document.querySelector(".contenedor-categorias");
const tags = document.querySelectorAll(".categoria");
const contenedorDeImagenes = document.querySelectorAll(".imagenes");
const imagenesPrincipales = document.querySelectorAll(".imagenes-principales");
const spanTitulo = document.querySelector(".efecto-titulo");
const btnCerrarFlotante = document.querySelector(".btn-cerrar");
const imgFlotante = document.querySelector(".img-flotante");
const btnIzqFlotante = document.querySelector(".btn-izquierda");
const btnDerFlotante = document.querySelector(".btn-derecha");
const contenedorFlotante = document.querySelector(
  ".contenedor-imagen-flotante"
);
const botonHover = document.querySelectorAll(".btn-hover");
const hoverImagenes = document.querySelectorAll(".hover-imgenes");

//EVENT LISTENER CATEGORIAS

botonCategorias.addEventListener("click", (e) => {
  e.preventDefault;
  contenedorTags.classList.toggle("display");
});

//EVENT LISTENER FILTRO

tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    const valorData = e.target.dataset.filter;
    contenedorDeImagenes.forEach((imagen) => {
      if (valorData == "todos") {
        imagen.style.display = "flex";
      } else if (valorData == imagen.dataset.item) {
        imagen.style.display = "flex";
      } else {
        imagen.style.display = "none";
      }
    });
  });
});

//SET INTERVAL CAMBIO DE PALABRA DEL TITULO
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

//EVENT LISTENERS DEL FLOTANTE
let listaDeImagenes = [];

let contadorImagenes = 0;

imagenesPrincipales.forEach((imagen) => {
  listaDeImagenes.push(imagen.src);
});

btnCerrarFlotante.addEventListener("click", () => {
  contenedorFlotante.style.display = "none";
});

botonHover.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    let botonClickeado = e.target.parentNode.parentNode.childNodes[1].src; //Obtener el src de la imagen a la que se le hace click para pasarselo a la imagen flotante,
    contenedorFlotante.style.display = "flex";
    imgFlotante.src = botonClickeado;
    contadorImagenes = listaDeImagenes.indexOf(imgFlotante.src); //obtener el numero de index de la imagen que fue selecionada para pasarlo como referencia en los event listener de las flechas
  });
});

//EVENT LISTENERS DE LOS BOTONES DEL FLOTANTE

btnIzqFlotante.addEventListener("click", () => {
  contadorImagenes--;
  if (contadorImagenes < 0) {
    contadorImagenes = listaDeImagenes.length - 1;
  }
  imgFlotante.src = listaDeImagenes[contadorImagenes];
});

btnDerFlotante.addEventListener("click", () => {
  contadorImagenes++;
  if (contadorImagenes > listaDeImagenes.length - 1) {
    contadorImagenes = 0;
  }
  imgFlotante.src = listaDeImagenes[contadorImagenes];
});
