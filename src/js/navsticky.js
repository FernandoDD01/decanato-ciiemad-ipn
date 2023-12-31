window.addEventListener("scroll", function () {
  let menu = document.querySelector(".contenedorNavegador");

  let scrollPosition = window.scrollY;

  if (scrollPosition > 60) {
    menu.classList.add("sticky");
    menu.style.opacity = 0.8;
  } else {
    menu.classList.remove("sticky");
    menu.style.opacity = 1;
  }

  // Calcula la opacidad en función de la posición de desplazamiento
});
