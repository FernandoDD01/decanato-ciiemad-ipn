let $overlay = document.getElementById("overlay"),
  $popup = document.getElementById("popup"),
  $btnCerrarPopup = document.querySelector(".btn-cerrar-popup");

let $btn_all = document.querySelector(".btn-all");
let $btn_inter = document.querySelector(".btn-inter");
let $btn_norma = document.querySelector(".btn-norma");
let $btn_pimadi = document.querySelector(".btn-pimadi");

$btn_all.classList.remove("bx-square");
$btn_all.classList.add("bx-check-square");

let fechas_linea_timepo = [];

async function getCards(option = ["Inter", "Norma", "PIMADI"]) {
  fechas_linea_timepo = [];

  try {
    let res = await fetch("src/db/linea-tiempo.json"),
      json = await res.json();

    if (!res.ok) {
      throw new Error("Ocurrió un error al solicitar los datos");
    }

    document.querySelector(
      ".contenedor-linea-tiempo"
    ).innerHTML = `<div class="contenedor-cards"></div>
    <div class="contenedor-barra">
      <div class="indices"></div>
      <div class="barra">
        <div class="dibujo-barra"></div>
      </div>
    </div>`;

    let $contenedorCards = document.querySelector(".contenedor-cards");
    let $contenedorIndices = document.querySelector(".indices");
    let $dibujo_barra = document.querySelector(".dibujo-barra");
    let $fragment = document.createDocumentFragment();
    let $fragment_indice = document.createDocumentFragment();
    let imagen = document.querySelector(".imagen-card");
    let titulo = document.querySelector(".titulo-card");
    let parrafo = document.querySelector(".parrafo-card");

    for (let prop in json.Fechas) {
      if (option.includes(json.Fechas[prop].tipo)) {
        if (!fechas_linea_timepo.includes(json.Fechas[prop].fecha)) {
          fechas_linea_timepo.push(json.Fechas[prop].fecha);

          let $card = document.createElement("div");

          let $content_img = document.createElement("div"),
            $content_fecha = document.createElement("div"),
            $fecha = document.createElement("div"),
            $linea_fecha = document.createElement("div");

          $fecha.classList.add("fecha");
          $card.classList.add("card-fecha");

          $linea_fecha.classList.add("linea-fecha");
          $content_img.classList.add("content-img");
          $content_fecha.classList.add("content-fecha");

          $content_img.innerHTML = `<img src="${json.Fechas[prop].imagen}" alt="imagen_${json.Fechas[prop].fecha}_num_${json.Fechas[prop].num}" ></img>`;
          $content_fecha.innerHTML = `<p>${json.Fechas[prop].titulo} - ${json.Fechas[prop].fecha}</p>`;

          switch (json.Fechas[prop].tipo) {
            case "Inter":
              $card.classList.add("inter");
              break;

            case "Norma":
              $card.classList.add("norma");

              break;

            case "PIMADI":
              $card.classList.add("pimadi");

              break;
          }

          $card.appendChild($content_img);
          $card.appendChild($content_fecha);

          //Se le inserta la funcionde abrir la card

          $card.addEventListener("click", () => {
            imagen.innerHTML = "";
            imagen.innerHTML = `<img src="${json.Fechas[prop].imagen}"/>`;
            titulo.innerHTML = "";
            titulo.innerHTML = `<h3>${json.Fechas[prop].titulo} - ${json.Fechas[prop].fecha}</h3>`;
            parrafo.innerHTML = "";
            parrafo.innerHTML = `<p>${json.Fechas[prop].contenido}</p>`;

            $overlay.classList.add("active");
            $popup.classList.add("active");
          });

          //
          $fecha.appendChild($card);
          $fecha.appendChild($linea_fecha);

          $fragment.appendChild($fecha);
          $contenedorCards.appendChild($fragment);
        } else {
          let orden = 99;
          let $card = document.createElement("div");
          let $content_img = document.createElement("div"),
            $content_fecha = document.createElement("div"),
            $fecha_duplicada = document.createElement("div"),
            $linea_fecha = document.createElement("div");
          $fecha_duplicada.classList.add("fecha_duplicada");
          $card.classList.add("card-fecha");

          $linea_fecha.classList.add("linea-fecha");

          $content_img.classList.add("content-img");
          $content_img.innerHTML = `<img src="${json.Fechas[prop].imagen}" alt="imagen_${json.Fechas[prop].fecha}_num_${json.Fechas[prop].num}" ></img>`;

          $content_fecha.classList.add("content-fecha");
          $content_fecha.innerHTML = `<p>${json.Fechas[prop].titulo} - ${json.Fechas[prop].fecha}</p>`;
          switch (json.Fechas[prop].tipo) {
            case "Inter":
              $card.classList.add("inter");
              break;

            case "Norma":
              $card.classList.add("norma");

              break;

            case "PIMADI":
              $card.classList.add("pimadi");

              break;
          }

          $card.appendChild($content_img);
          $card.appendChild($content_fecha);

          //Se le inserta la funcionde abrir la card

          $card.addEventListener("click", () => {
            imagen.innerHTML = "";
            imagen.innerHTML = `<img  src="${json.Fechas[prop].imagen}">`;
            titulo.innerHTML = "";
            titulo.innerHTML = `<h3>${json.Fechas[prop].titulo} - ${json.Fechas[prop].fecha}</h3>`;
            parrafo.innerHTML = "";
            parrafo.innerHTML = `<p>${json.Fechas[prop].contenido}</p>`;

            $overlay.classList.add("active");
            $popup.classList.add("active");
          });

          //

          $linea_fecha.style.height = "100px";
          $linea_fecha.style.zIndex = "1";

          $fecha_duplicada.appendChild($card);

          $fecha_duplicada.style.zIndex = "2";
          $fecha_duplicada.style.position = "relative";
          $fecha_duplicada.style.order = `${orden - json.Fechas[prop].num}`;
          $fecha_duplicada.style.left = `${10 * json.Fechas[prop].num}px`;
          $fecha_duplicada.style.marginBottom = "5px";

          $contenedorCards.lastChild.appendChild($fecha_duplicada);
        }
      }
    }
    console.log(fechas_linea_timepo);

    //Creación de la barra de la linea del timepo

    fechas_linea_timepo.forEach((el) => {
      let $content_indice = document.createElement("div"),
        $linea_indice = document.createElement("div"),
        $fecha_indice = document.createElement("div");
      $content_indice.classList.add("content-indice");
      $linea_indice.classList.add("linea-indice");
      $fecha_indice.classList.add("fecha-indice");

      $fecha_indice.textContent = el;

      $content_indice.appendChild($linea_indice);
      $content_indice.appendChild($fecha_indice);

      $fragment_indice.appendChild($content_indice);
    });

    $dibujo_barra.style.width = `${270 * fechas_linea_timepo.length}px`;

    $contenedorIndices.appendChild($fragment_indice);
  } catch (error) {
    let message = error.status || "Ocurrio un error";
    console.warn(message);
    console.log(error);
  }
}

getCards();

//cerrar el popup//

$btnCerrarPopup.addEventListener("click", () => {
  $overlay.classList.remove("active");
  $popup.classList.remove("active");
});

$btn_all.addEventListener("click", () => {
  $btn_all.classList.remove("bx-square");
  $btn_all.classList.add("bx-check-square");

  $btn_inter.classList.remove("bx-check-square");
  $btn_norma.classList.remove("bx-check-square");
  $btn_pimadi.classList.remove("bx-check-square");

  $btn_inter.classList.add("bx-square");
  $btn_norma.classList.add("bx-square");
  $btn_pimadi.classList.add("bx-square");

  getCards(["Inter", "Normas", "PIMADI"]);
});

$btn_inter.addEventListener("click", () => {
  $btn_inter.classList.remove("bx-square");
  $btn_inter.classList.add("bx-check-square");

  $btn_all.classList.remove("bx-check-square");
  $btn_norma.classList.remove("bx-check-square");
  $btn_pimadi.classList.remove("bx-check-square");

  $btn_all.classList.add("bx-square");
  $btn_norma.classList.add("bx-square");
  $btn_pimadi.classList.add("bx-square");

  getCards(["Inter"]);
});

$btn_norma.addEventListener("click", () => {
  $btn_norma.classList.remove("bx-square");
  $btn_norma.classList.add("bx-check-square");

  $btn_all.classList.remove("bx-check-square");
  $btn_inter.classList.remove("bx-check-square");
  $btn_pimadi.classList.remove("bx-check-square");

  $btn_all.classList.add("bx-square");
  $btn_inter.classList.add("bx-square");
  $btn_pimadi.classList.add("bx-square");

  getCards(["Norma"]);
});

$btn_pimadi.addEventListener("click", () => {
  $btn_pimadi.classList.remove("bx-square");
  $btn_pimadi.classList.add("bx-check-square");

  $btn_all.classList.remove("bx-check-square");
  $btn_inter.classList.remove("bx-check-square");
  $btn_norma.classList.remove("bx-check-square");

  $btn_all.classList.add("bx-square");
  $btn_inter.classList.add("bx-square");
  $btn_norma.classList.add("bx-square");

  getCards(["PIMADI"]);
});
