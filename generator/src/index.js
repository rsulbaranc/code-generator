const { connect } = require("http2");
const pool = require("./db/db");
const fs = require("fs");
const path = require("path");

try {
  pool.connect();
  console.log("se conecto a la base de datos");
} catch (e) {
  console.log(e);
}

const tableName = "empleados"

const dbFunction = pool.query(
  `SELECT * FROM ${tableName} ORDER BY id`,
  (error, results) => {
    if (error) {
      throw error;
    }
    const data = JSON.stringify(results.rows); // Obtener los datos de la consulta

    //console.log(data);

    // Generar la vista utilizando los datos
    const generateView = (data) => {
      return (
        `
      import * as React from 'react';

      import './App.css'
      import TableView from './components/TableView';

      const MyView = () => {

        return (
          <>
      
                <TableView sampleData={`+ data + `} title={"`+ tableName+`"} />
               
          </>
        );
      };
      
      export default MyView;
      `
      );
    };

    const viewCode = generateView(data);

    const outputFolder = "../react-project/src"; // Ruta relativa de la carpeta de salida
    const outputFile = path.join(outputFolder, "MyView.jsx"); // Genera la ruta completa al archivo de salida

    // Guardar la vista generada en un archivo .jsx
    fs.writeFile(outputFile, viewCode, (err) => {
      if (err) throw err;
      console.log("Archivo MyView.jsx generado exitosamente.");

      process.exit();
    });
  }
);
