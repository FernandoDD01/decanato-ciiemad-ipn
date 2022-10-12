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

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("Server ok en puerto:" + app.get("port"));
});

app.get("/", function (req, res) {
  res.send("Ruta de prueba");
});

var conexion = mysql.createConnection({
  host: "https://databases.000webhost.com/",
  database: "id19682704_decanato_ciiemad",
  user: "id19682704_root",
  password: "!#qc-F2i<RlzE?-D",
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("CONEXION EXITOSA");
  }
});

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
