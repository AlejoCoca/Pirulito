const contenedor = document.getElementById("contenedor");
const imagen = document.getElementById("imagen");
const boton = document.getElementById("boton");
const imagenes = [];
const posiciones = [];

let animacionActiva = false; // Flag to control animation state

// Función para animar el rebote
function animarRebote() {
  // Intervalo para la animación
  const intervalo = setInterval(() => {
    imagenes.forEach((imagen, index) => {
    // Actualizar la posición
    posiciones[index].x += 5*posiciones[index].velocidadX;
    posiciones[index].y += 5*posiciones[index].velocidadY;

    // Aplicar la nueva posición
    imagen.style.top = `${posiciones[index].x}px`;
    imagen.style.left = `${posiciones[index].y}px`;

    // Rebote en el suelo
    if (posiciones[index].x >= contenedor.clientHeight || posiciones[index].x < 0) {
      // Invertir la velocidad vertical
      posiciones[index].velocidadX *= -1;
    }

    // Rebote en las paredes
    if (posiciones[index].y >= contenedor.clientWidth || posiciones[index].y < 0) {
      // Invertir la velocidad horizontal
      posiciones[index].velocidadY *= -1;
    }
  })
  }, 20); // Ajustar la velocidad de la animación

  // Detener la animación después de un tiempo
  setTimeout(() => {
    clearInterval(intervalo);
    animacionActiva = false; // Set flag to indicate animation is stopped
  }, 50000); // Duración de la animación en milisegundos
}

// Iniciar la animación al hacer clic en el botón
boton.addEventListener("click", () => {
  if (!animacionActiva) {
    animarRebote();
    animacionActiva = true; // Set flag to indicate animation is running
  }else{
    const newImagen = document.createElement("img");
    newImagen.src = "public/TINISIUS.webp";
    newImagen.style.height = "150px";
    newImagen.style.width = "150px";
    newImagen.style.position = "absolute";
    newImagen.style.top = "0";
    newImagen.style.left = "0";
    posiciones.push({x: 0, y: Math.random()*contenedor.clientWidth, velocidadX: 1, velocidadY: 1});
    console.log(newImagen);
    document.body.append(newImagen);
    imagenes.push(newImagen);
  }
});
