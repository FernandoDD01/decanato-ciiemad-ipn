const url = "http://localhost:3000/api/gacetas/";
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
  .catch((error) => console.log(error));
