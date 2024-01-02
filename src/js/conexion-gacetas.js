const pagina1 = document.getElementById("pagina-1");
const pagina2 = document.getElementById("pagina-2");
const pagina3 = document.getElementById("pagina-3");
const pagina4 = document.getElementById("pagina-4");
const pagina5 = document.getElementById("pagina-5");
const pagina6 = document.getElementById("pagina-6");
const pagina7 = document.getElementById("pagina-7");
const pagina8 = document.getElementById("pagina-8");
const pagina9 = document.getElementById("pagina-9");
const pagina10 = document.getElementById("pagina-10");

//Credenciales para acceder a la base de datos de firebase
const firebaseConfig = {
  apiKey: "AIzaSyBj0omjzGZ0VGWVgANO4qvUfZFO3EQQg1U",
  authDomain: "decanato-ciiemad-ipn.firebaseapp.com",
  projectId: "decanato-ciiemad-ipn",
  storageBucket: "decanato-ciiemad-ipn.appspot.com",
  messagingSenderId: "239098004211",
  appId: "1:239098004211:web:43650b37aa3786c4622d86",
  measurementId: "G-BQDKX7BKGY",
  // ...
};

// Inicializar firebase
firebase.initializeApp(firebaseConfig);
// Inicializar Cloud Firestore
const db = firebase.firestore();

//CODIGO PARA FILTRAR
let boton = document.getElementById("boton");
let input = document.getElementById("serch");

var indice = 1;

paginacion(indice);
pagina1.classList.add("active");
pagina1.addEventListener("click", (e) => {
  indice = 1;

  paginacion(indice);

  e.target.classList.add("active");

  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");

  window.scrollY(0);
});
pagina2.addEventListener("click", (e) => {
  indice = 41;

  paginacion(indice);
  console.log(indice);

  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina3.addEventListener("click", (e) => {
  indice = 81;

  paginacion(indice);
  console.log(indice);

  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina4.addEventListener("click", (e) => {
  indice = 121;

  paginacion(indice);
  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina5.addEventListener("click", (e) => {
  indice = 161;
  verifyPag(indice);

  paginacion(indice);
  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina6.addEventListener("click", (e) => {
  indice = 201;

  paginacion(indice);
  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina7.addEventListener("click", (e) => {
  indice = 241;

  paginacion(indice);
  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina8.addEventListener("click", (e) => {
  indice = 281;

  paginacion(indice);

  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina9.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina9.addEventListener("click", (e) => {
  indice = 321;

  paginacion(indice);
  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina10.classList.remove("active");
  window.scrollY(0);
});
pagina10.addEventListener("click", (e) => {
  indice = 361;

  paginacion(indice);
  e.target.classList.add("active");

  pagina1.classList.remove("active");
  pagina2.classList.remove("active");
  pagina3.classList.remove("active");
  pagina4.classList.remove("active");
  pagina5.classList.remove("active");
  pagina6.classList.remove("active");
  pagina7.classList.remove("active");
  pagina8.classList.remove("active");
  pagina9.classList.remove("active");
  window.scrollY(0);
});

let enlace_gacetas = [
  "https://www.ipn.mx/assets/files/ccs/docs/gaceta-mensual/2004/03/594g-febrero04.pdf",
  "https://www.ipn.mx/assets/files/ccs/docs/gaceta-mensual/2004/04/595-gaceta595-webok.pdf",
  "https://www.ipn.mx/assets/files/ccs/docs/gaceta-mensual/2004/05/597-31-mayo-gmayo04.pdf",
  "https://www.ipn.mx/assets/files/ccs/docs/gaceta-mensual/2004/06/g-598-m.pdf",
  "https://www.ipn.mx/assets/files/ccs/docs/gaceta-mensual/2004/07/599-31-julio-gaceweb.pdf",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
  "https://www.ipn.mx/imageninstitucional/gacetas/politecnica.html",
];

//acceder a la tabla de gacetas y formar los renglones de la tabla
function paginacion(I) {
  let contenedor = document.querySelector(".seccion_gacetas");
  let resultados = "";
  db.collection("gacetas")
    .orderBy("id", "asc")
    .get()
    .then((querySnapshot) => {
      let contador = 0;

      console.log(querySnapshot);
      querySnapshot.forEach((gacetas) => {
        contador++;
        if (contador >= I && contador < I + 40) {
          resultados += `<div class="card mb-3" style="max-width: 700px";>
        <div class="row g-0">
          <div class="col-md-4">
          <a href="${enlace_gacetas[contador - 1]}" target="_blank">
            <img src="assets/port_gacetas/${
              gacetas.data().numero
            }.jpg" class="img-fluid rounded-start" alt="${
            gacetas.data().numero
          }" ></a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${
                gacetas.data().documento_historico
              } - No.${gacetas.data().id}</h5>
              <p class="card-text ">${gacetas.data().descripcion}</p>
              <p class="card-text "><small class="text-body-secundary">${
                gacetas.data().clasificacion
              }</small></p>
            </div>
          </div>
        </div>
      </div>`;

          /*`<div class="card  w-75 mt-3 mx-auto" style="height: 16rem";>
        <div class="row g-0">
          <div class="col-md-4 p-3 justify-content-center">
          <a href="assets/pdf_gacetas/${
            gacetas.data().numero
          }.pdf" target="_blank">
            <img src="assets/port_gacetas/${
              gacetas.data().numero
            }.jpg" class="img-fluid rounded-start mx-auto d-block" alt="${
            gacetas.data().numero
          }" width="160px" height="300px"></a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title px-5">${
                gacetas.data().documento_historico
              } - No.${gacetas.data().id}</h5>
              <p class="card-text px-5">${gacetas.data().descripcion}</p>
              <p class="card-text px-5"><small class="text-muted">${
                gacetas.data().clasificacion
              }</small></p>
            </div>
          </div>
        </div>
      </div>`;*/
        } else {
          return;
        }
      });
      contenedor.innerHTML = resultados;
    });
}

function quitarAcentos(cadena) {
  const acentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };
  return cadena
    .split("")
    .map((letra) => acentos[letra] || letra)
    .join("")
    .toString();
}

boton.addEventListener("click", () => {
  let contenedor = document.querySelector(".seccion_gacetas");
  let resultados = "";
  contenedor.innerHTML = "";
  resultados = "";
  console.log(typeof input.value);
  db.collection("gacetas")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((gacetas) => {
        let comparador = "",
          comparador2 = "",
          numeros = "1 2 3 4 5 6 7 8 9 ";
        comparador = gacetas.data().descripcion.toLowerCase();
        comparador = quitarAcentos(comparador);

        comparador2 = input.value.toLowerCase();
        comparador2 = quitarAcentos(comparador2);
        console.log(input.value[0]);
        if (
          input.value[0] == "0" ||
          input.value[0] == "1" ||
          input.value[0] == "2" ||
          input.value[0] == "3" ||
          input.value[0] == "4" ||
          input.value[0] == "5" ||
          input.value[0] == "6" ||
          input.value[0] == "7" ||
          input.value[0] == "8" ||
          input.value[0] == "9"
        ) {
          comparador = gacetas.data().id.toString();
          comparador2 = input.value;
          if (comparador === comparador2) {
            resultados += `<div class="card w-75 mt-3 mx-auto" style="height: 16rem;">
    <div class="row g-0">
      <div class="col-md-4 p-3 justify-content-center">
      <a href="assets/pdf_gacetas/${gacetas.data().numero}.pdf" target="_blank">
        <img src="assets/port_gacetas/${
          gacetas.data().numero
        }.jpg" class="img-fluid rounded-start mx-auto d-block" alt=alt="${
              gacetas.data().numero
            }" width="160px" height="300px"></a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${gacetas.data().documento_historico} - No.${
              gacetas.data().numero
            }</h5>
          <p class="card-text">${gacetas.data().descripcion}</p>
          <p class="card-text"><small class="text-muted">${
            gacetas.data().clasificacion
          }</small></p>
        </div>
      </div>
    </div>
  </div>`;
          }
        } else {
          if (comparador.includes(comparador2)) {
            resultados += `<div class="card w-75 mt-3 mx-auto" style="height: 16rem;">
    <div class="row g-0">
      <div class="col-md-4 p-3 justify-content-center">
      <a href="assets/pdf_gacetas/${gacetas.data().numero}.pdf" target="_blank">
        <img src="assets/port_gacetas/${
          gacetas.data().numero
        }.jpg" class="img-fluid rounded-start mx-auto d-block" alt=alt="${
              gacetas.data().numero
            }" width="160px" height="300px"></a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${gacetas.data().documento_historico} - No.${
              gacetas.data().numero
            }</h5>
          <p class="card-text">${gacetas.data().descripcion}</p>
          <p class="card-text"><small class="text-muted">${
            gacetas.data().clasificacion
          }</small></p>
        </div>
      </div>
    </div>
  </div>`;
          }
        }
      });
      contenedor.innerHTML = resultados;

      if (contenedor.innerHTML === "") {
        contenedor.innerHTML += `<h2 class="text-center">No hay resultados...</h2>`;
      }
    });
});
