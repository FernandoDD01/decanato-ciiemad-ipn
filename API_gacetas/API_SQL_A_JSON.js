//Crea una API que se conecta a la base de daot MySQL de forma local y manda la informacion al puerto 3000 en formato JSON
//librerias
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const morgan = require("morgan");

//Uso de cors
app.use(cors());

//middleware

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Seleccion de puerto
app.set("port", process.env.PORT || 3000);
//validacion de puerto con una ruta de prueba
app.listen(app.get("port"), function () {
  console.log("Server ok en puerto:" + app.get("port"));
});
app.get("/", function (req, res) {
  res.send("Ruta de prueba");
});

//conexion a base de datos MySQL
var conexion = mysql.createConnection({
  host: "localhost",
  database: "archivo_historico",
  user: "root",
  password: "Gala1999+",
});

//Verificador de conexion a base de datos MySQL
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("CONEXION EXITOSA");
  }
});

//crea una ruta en el puerto 3000 y manda todos los registro (send(results)) de la tabla "gacetas"
app.get("/api/gacetas/", (req, res) => {
  conexion.query("SELECT * FROM gacetas", (error, results) => {
    if (error) {
      throw error;
      conexion.end();
    }
    {
      results.forEach((results) => {
        console.log(results);
      });
      res.send(results);
    }
  });
});
