const pool = require('./db/db');
const fs = require('fs');

try {
    pool.connect();
    console.log("se conecto a la base de datos");
} catch (e) {
    console.log(e);
}

pool.query('SELECT * FROM producto', (error, results) => {
    if (error) {
      throw error;
    }
    const data = results.rows; // Obtener los datos de la consulta
  
    // Generar la vista utilizando los datos
    const generateView = (data) => {
      return `
        import React from 'react';
  
        const MyView = () => {
          return (
            <div>
              {data.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          );
        };
  
        export default MyView;
      `;
    };
  
    const viewCode = generateView(data);
  
    // Guardar la vista generada en un archivo .jsx
    fs.writeFile('MyView.jsx', viewCode, (err) => {
      if (err) throw err;
      console.log('Archivo MyView.jsx generado exitosamente.');
    });
  });