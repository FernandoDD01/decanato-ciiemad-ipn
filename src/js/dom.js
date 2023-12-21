const $header = document.querySelector("header"),
  $main = document.querySelector("main"),
  $footer = document.querySelector("footer");

/*$header.innerHTML = ``;*/

$main.innerHTML = ` <!--Contenedor Carrusel-->
<div 
  id="carouselExampleIndicators"
  class="carousel slide "
  data-bs-ride="true"
  style="z-index: 1"
  
>
  <div class="carousel-indicators">
    <buttons
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></buttons>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="assets/imagenes/Banner_REDAALC.jpg"
        class="d-block w-100"
        alt="aviso1"
      />
    </div>
    <div class="carousel-item">
      <img
        src="assets/imagenes/Banner_CIMA_2023.jpg"
        class="d-block w-100"
        alt="aviso2"
      />
    </div>
    <div class="carousel-item">
      <img
        src="assets/imagenes/ciiemad_50dmma.jpg"
        class="d-block w-100"
        alt="aviso3"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!--Espacio abajo del carrusel-->
<div class="bg-light">
  <div class="abajo-Carrusel"></div>
</div>

<div class="bg-IPN">
  <div class="contenedorGinda"></div>
</div>

`;

/*$footer.innerHTML = `



`;*/

/*<div> Hola</div>

<div class="container text-center">
<div class="row">
  <div class="col-2">
    <a href="https://www.ipn.mx/" target="_blank">
      <img
        class="img-fluid"
        src="/assets/imagenes/Logo_IPN.png"
        alt="Logo_IPN"
        width="120"
        height="240"
      />
    </a>
  </div>
  <div class="col-8">
    <ul class="list-unstyled small text-muted text-center">
      <li class="mb-2 fw-bolder">
        © Todos los derechos reservados - Fernando Enrique Alvarado
        Bolaños - Septiembre 2023
      </li>

      <li class="mb-2 fw-bolder">Versión 1 . 0 . 0</li>
    </ul>
  </div>
  <div class="col-2">
    <a href="https://www.ciiemad.ipn.mx/" target="_blank"
      ><img
        class="img-fluid logo-ciiemad"
        src="/assets/imagenes/banderin-ciiemad.png"
        alt="Logo_IPN"
        width="120"
        height="240"
    /></a>
  </div>
</div>
</div>*/
