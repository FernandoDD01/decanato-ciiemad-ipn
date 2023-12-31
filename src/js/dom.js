/*Control del header y el footer */

const $header = document.querySelector("header"),
  $footer = document.querySelector("footer");

$header.innerHTML = ``;

$header.innerHTML += `
<!--navegador-->

<nav class="navbar navbar-expand-lg navbar-dark contenedorNavegador" >
<div class="container-fluid justify-content-center">
  <div class="banderin">
    <img
      class="banderin-vacio"
      src="assets/imagenes/banderin.png"
      width="100"
      height="100"
      alt="banderin-vacio"
      class="banderin-img justify-content-left"
    />
    <img
      class="escudo-ciiemad"
      src="assets/imagenes/banderin-ciiemad.png"
      width="75"
      height="75"
      alt="escudo-ciiemad"
      class="banderin-img justify-content-left"
    />
  </div>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="true"
    aria-label="Toggle navigation"
  >
    <a class="navbar-brand" href="#">Menú Principal</a>
    <span class="navbar-toggler-icon"></span>
  </button>

  <div
    class="collapse navbar-collapse justify-content-center"
    id="navbarNavDropdown"
    style="margin-top: 0px"
  >
    <ul class="navbar-nav">
      <li class="nav-item enlace-nav-inicio">
        <a
          href="/"
          class="nav-link"
          aria-current="page"
          title="Inicio"
          >Inicio</a
        >
        
        
      </li>
      <li class="nav-item enlace-nav-decana">
        <a href="/CV_decana.html" class="nav-link" title="Decana"
          >Decana</a
        >
      </li>
      <li class="nav-item enlace-nav-gacetas">
        <a href="/Gacetas.html" class="nav-link" title="Gacetas"
          >Gacetas</a
        >
      </li>
      <li class="nav-item enlace-nav-historia">
        <a
          href="Historial_del_CIIEMAD.html"
          class="nav-link"
          title="Historia del CIIEMAD"
          >Historia del CIIEMAD</a
        >
      </li>

      <li class="nav-item  dropdown enlace-nav-galeria">
        <a
          class="nav-link dropdown-toggle "
          title="Galería"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >Galería</a
        >
        <ul class="dropdown-menu color-black">
          <li>
            <a class="dropdown-item" href="Fotos.html" title="Fotos">
              Fotos</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="Videos.html" title="Videos">
              Videos</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
<div
  id="contenedorAccesibilidad-scroll"
  class="contenedorAccesibilidad u-oculto"
></div>
</nav>

      <!--Contenedor Nombre Instituto-->
      

      `;

if (document.querySelector("body").classList.contains("root")) {
  $header.innerHTML += `<div class="contenedorEscuela">Decanato CIIEMAD IPN</div>`;
}

$footer.innerHTML = ` <div class="footer-guinda"></div>
<div class="footer-gray">
  <div class="footer-escudo-ipn">
    <a href="https://www.ipn.mx/" target="_blank" rel="noreferrer">
      <img
        src="/assets/imagenes/Logo_IPN.png"
        alt="escudo-IPN"
        width="100"
        height="100"
      />
    </a>
  </div>

  <div class="footer-autor">
    <p>© Todos los derechos reservados</p>
    <p><i>- por Fernando Enrique Alvarado Bolaños -</i></p>
    

    <p>Enero 2024</p>

    <div class="contact">
    <p>fealvarado07@gmail.com </p>
    <div class="contact-icons">
    <a href="https://github.com/FernandoDD01" target="_blank" rel="noreferrer"><i class='bx bxl-github bx-md' title="Github"></i></a>
    <a href="https://www.linkedin.com/in/fernando-enrique-alvarado" target="_blank" rel="noreferrer"><i class='bx bxl-linkedin-square bx-md' title="Linkedin"></i></a>
    </div>
    
    </div>
    
  </div>

  <div class="footer-escudo-ciiemad">
    <a href="https://www.ciiemad.ipn.mx/" target="_blank" rel="noreferrer"
      ><img
        src="/assets/imagenes/banderin-ciiemad.png"
        alt="escudo-ciiemad"
        width="100"
        height="100"
    /></a>
  </div>
</div>`;
