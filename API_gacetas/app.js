// Conexion a base de datos con sequelize e insercion de datos de archico CVS a SQL//

//librerias
const readline = require("readline");
const fs = require("fs");
const Sequelize = require("sequelize");
const firebase = require("firebase");
const mysql = require("mysql");

//conexion con sequelize
const sequelize = new Sequelize("archivo_historico", "root", "Gala1999+", {
  host: "localhost",
  dialect: "mysql",
});

//funcion que lee linea por linea al documento CSV y lo inserta en la base de datos SQL
const insertGacetas = async () => {
  await sequelize.authenticate();

  const file = readline.createInterface(fs.createReadStream("registroSQL.csv"));
  const gacetas = [];

  file.on("line", async (line) => {
    gacetas.push(line.split(","));
  });

  file.on("close", async () => {
    await sequelize.query({
      query:
        "INSERT INTO gacetas (area, soporte, documento_historico, numero, anio, fecha, tipo, imagen, descripcion, ejemplares,clasificacion) VALUES ?",
      values: [gacetas],
    });
  });
};

//insertGacetas(); //Activar función

//conexion con base de datos de firebase
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

//conexion  con base de datos MySQL (de forma local)
var conexion = mysql.createConnection({
  host: "localhost",
  database: "archivo_historico",
  user: "root",
  password: "Gala1999+",
});

//inicializar firestore
firebase.initializeApp(firebaseConfig);
// Inicializar Cloud Firestore
const db = firebase.firestore();

//SELECT  a base de datos de MySQL
conexion.query("SELECT * FROM gacetas", (error, results) => {
  if (error) {
    throw error;
    conexion.end();
  }
  {
    //Por cada registro en MySQL se realiza una insercion (add) a la base de datos de firestore en la tabla "gacetas"
    results.forEach((results) => {
      db.collection("gacetas")
        .add({
          id: results.numero,
          area: results.area,
          soporte: results.soporte,
          documento_historico: results.documento_historico,
          numero: results.numero,
          anio: results.anio,
          fecha: results.fecha,
          tipo: results.tipo,
          imagen: results.imagen,
          descripcion: results.descripcion,
          ejemplares: results.ejemplares,
          clasificacion: results.clasificacion,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id); //El ID que se genera es random de 20 caracteres
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    });
  }
});
