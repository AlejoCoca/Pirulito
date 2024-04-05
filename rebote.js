const contenedor = document.getElementById("contenedor");
const imagen = document.getElementById("imagen");
const boton = document.getElementById("boton");

let animacionActiva = false; // Flag to control animation state

// Función para animar el rebote
function animarRebote() {
  imagen.style.position = "absolute";
  imagen.style.top = "0";
  imagen.style.left = "0";
  // Posición inicial
  let x = 0;
  let y = 0;

  let velocidadX = 1;
  let velocidadY = 1;

  // Intervalo para la animación
  const intervalo = setInterval(() => {
    // Actualizar la posición
    x += 5*velocidadX;
    y += 5*velocidadY;

    // Aplicar la nueva posición
    imagen.style.top = `${y}px`;
    imagen.style.left = `${x}px`;

    // Rebote en el suelo
    if (y >= contenedor.clientHeight || y < 0) {
      // Invertir la velocidad vertical
      velocidadY *= -1;
    }

    // Rebote en las paredes
    if (x >= contenedor.clientWidth || x < 0) {
      // Invertir la velocidad horizontal
      velocidadX *= -1;
    }
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
  }
});
