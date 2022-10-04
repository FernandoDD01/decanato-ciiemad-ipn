let contenedor = document.querySelector(".seccion_gacetas");
let resultados = "";

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

//acceder a la tabla de gacetas y formar los renglones de la tabla
db.collection("gacetas")
  .orderBy("id", "asc")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((gacetas) => {
      resultados += `<div class="card  w-75 mt-3 mx-auto" style="height: 16rem;">
    <div class="row g-0">
      <div class="col-md-4 p-3 justify-content-center">
      <a href="assets/pdf_gacetas/${gacetas.data().numero}.pdf" target="_blank">
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
          } - No.${gacetas.data().numero}</h5>
          <p class="card-text px-5">${gacetas.data().descripcion}</p>
          <p class="card-text px-5"><small class="text-muted">${
            gacetas.data().clasificacion
          }</small></p>
        </div>
      </div>
    </div>
  </div>`;
    });
    contenedor.innerHTML = resultados;
  });

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
  contenedor.innerHTML = "";
  resultados = "";

  db.collection("gacetas")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((gacetas) => {
        let comparador = "",
          comparador2 = "";
        comparador = gacetas.data().descripcion.toLowerCase();
        comparador = quitarAcentos(comparador);

        console.log(comparador);
        comparador2 = input.value.toLowerCase();
        comparador2 = quitarAcentos(comparador2);

        if (comparador.includes(comparador2)) {
          resultados += `<div class="card mb-3 w-100" style="height: 16rem;">
    <div class="row g-0">
      <div class="col-md-4 p-3">
      <a href="assets/pdf_gacetas/${gacetas.data().numero}.pdf" target="_blank">
        <img src="assets/port_gacetas/${
          gacetas.data().numero
        }.jpg" class="img-fluid rounded-start" alt="594" width="160px" height="300px" ></a>
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
      });
      contenedor.innerHTML = resultados;

      if (contenedor.innerHTML === "") {
        contenedor.innerHTML += `<h2>No hay resultados...</h2>`;
      }
    });
});

// Initialize Cloud Storage and get a reference to the service

// Get a non-default Storage bucket

//CODIGO PARA CONSUMIR API que acceda a la base de datos

/*const url = "http://localhost:3000/api/gacetas/";
const contenedor = document.querySelector("tbody");
let resultados = "";

//funcion para mostrar resultados
const mostrar = (gacetas) => {
  gacetas.forEach((gaceta) => {
    resultados += `
                    <tr class="text-center">
                    <td>${gaceta.id}</td>
                    <td>${gaceta.documento_historico}</td>
                    <td>${gaceta.numero}</td>
            
                    <td>
                    <a href="pdf_gacetas/${gaceta.numero}.pdf" target="_blank">
                    <img src="port_gacetas/${gaceta.imagen}" alt="${gaceta.numero}" width="70px" height="90px">
                    </a>
                    </td>
                    </tr>`;
  });
  contenedor.innerHTML = resultados;
};

//Procedimiento mostrar
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .catch((error) => console.log(error)); */
