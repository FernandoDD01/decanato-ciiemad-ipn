let $galeria = document.querySelector(".galeria");
let $fragment = document.createDocumentFragment();

let overlay = document.getElementById("overlay"),
  popup = document.getElementById("popup"),
  $btn_close_window = document.querySelector(".close-window-galeria");

//Flechas de la galería//

let $arrow_left = document.querySelector(".arrow-left"),
  $arrow_right = document.querySelector(".arrow-right");

let arrayFotos = [];
async function getPhotos() {
  try {
    let res = await fetch("src/db/fotos.json"),
      json = await res.json();

    if (!res.ok) {
      throw new Error("Ocurrió un error al solicitar los datos");
    }

    for (let prop in json.Fotos) {
      let $contenedor = document.createElement("div");
      $contenedor.classList.add("content-img");
      let $enlace = document.createElement("img");
      $enlace.src = json.Fotos[prop].enlace;
      $enlace.alt = `Foto_${json.Fotos[prop].id}`;
      $enlace.id = json.Fotos[prop].id - 1;

      arrayFotos.push($enlace.outerHTML);

      $contenedor.appendChild($enlace);
      $fragment.appendChild($contenedor);
    }

    $galeria.innerHTML = "";

    $galeria.appendChild($fragment);
    $galeria.style.border = "solid thin gray";
  } catch (error) {
    let message = error.status || "Ocurrio un error";
    console.warn(message);
    console.log(error);
  }
}

getPhotos();

$galeria.addEventListener("click", (e) => {
  //popup.querySelector(".carrusel-galery").content = "";
  if (e.target.id) {
    overlay.classList.add("active");
    popup.classList.add("active");
    popup.querySelector(".carrusel-galery").innerHTML = arrayFotos[e.target.id];
  }
});

$btn_close_window.addEventListener("click", () => {
  overlay.classList.remove("active");
  popup.classList.remove("active");
});

$arrow_left.addEventListener("click", (e) => {
  let referencia = parseInt(
    e.target.parentNode.parentNode.querySelector("img").id
  );

  if (referencia > 0) {
    popup.querySelector(".carrusel-galery").innerHTML =
      arrayFotos[referencia - 1];
  } else {
    referencia = arrayFotos.length;
    popup.querySelector(".carrusel-galery").innerHTML =
      arrayFotos[referencia - 1];
  }
});

$arrow_right.addEventListener("click", (e) => {
  let referencia = parseInt(
    e.target.parentNode.parentNode.querySelector("img").id
  );

  if (referencia < arrayFotos.length - 1) {
    popup.querySelector(".carrusel-galery").innerHTML =
      arrayFotos[referencia + 1];
  } else {
    referencia = -1;
    popup.querySelector(".carrusel-galery").innerHTML =
      arrayFotos[referencia + 1];
  }
});
