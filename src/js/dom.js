const $header = document.querySelector("header"),
  $main = document.querySelector("main"),
  $footer = document.querySelector("footer");

$header.innerHTML = ``;

$header.innerHTML += `
<!--navegador-->

      <nav class="navbar navbar-expand-lg navbar-dark contenedorNavegador">
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
              <li class="nav-item">
                <a
                  href="index.html"
                  class="nav-link active"
                  aria-current="page"
                  title="Inicio"
                  >Inicio</a
                >
              </li>
              <li class="nav-item">
                <a href="CV_decana.html" class="nav-link" title="CV-decana"
                  >Decana</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  title="Archivo-Historico"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Archivo Histórico</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="Hechos_historicos.html"
                      title="Hechos historicos"
                      ><div class="selected" style="display: none"></div>
                      <p>Hechos Históricos</p>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="Gacetas.html"
                      title="Gacetas"
                    >
                      Gacetas</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  href="Historial_del_CIIEMAD.html"
                  class="nav-link"
                  title="Hechos_historicos_IPN"
                  >Historia del CIIEMAD</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  title="Personas_destacadas"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Personas destacadas</a
                >
                <ul class="dropdown-menu color-black">
                  <li>
                    <a
                      class="dropdown-item"
                      href="Profesores.html"
                      title="Profesores"
                    >
                      Profesores</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="Alumnos.html"
                      title="Alumnos"
                    >
                      Alumnos</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
    <a href="https://www.ipn.mx/" target="_blank">
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
    <p>- Fernando Enrique Alvarado Bolaños -</p>
    <p>Enero 2024</p>
  </div>

  <div class="footer-escudo-ciiemad">
    <a href="https://www.ciiemad.ipn.mx/" target="_blank"
      ><img
        src="/assets/imagenes/banderin-ciiemad.png"
        alt="escudo-ciiemad"
        width="100"
        height="100"
    /></a>
  </div>
</div>`;
