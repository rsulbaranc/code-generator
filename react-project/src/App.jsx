import * as React from 'react';

import './App.css'
import sampleData from './assets/sampleData'

const App = () => {

  React.useEffect(() => {
    console.log(sampleData)
  }) 

  const data = sampleData
  const keys = Object.keys(data.length ? data[0] : { });

  const options = [
    { label: 'Tabla de empleados', value: '1' },
    { label: 'Tabla de Productos', value: '2' },
    { label: 'Tabla de administracion', value: '3' },
  ];

  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div style={{
        padding: 50,
        paddingLeft: 75,
        paddingRight: 75,
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        boxShadow: '1px 2px 25px gray',
      }}>

        <img
          src='https://cdn-icons-png.flaticon.com/512/1157/1157109.png'
          style={{
            height: '250px',
          }} />

        <h1>Generador de código</h1>
        <p>Selecciona tabla deseada:</p>

        <select value={value} onChange={handleChange}>
          {options.map((option) => (<option value={option.value}>{option.label}</option>))}
        </select>

        {value && <p style={{ paddingTop: 35 }}>Se abrirá la tabla en una nueva ventana...</p>}

      </div>

      <div
        class="container"
        style={{
          padding: 25,
          backgroundColor: '#f5f5f5',
          borderRadius: 15,
          boxShadow: '1px 2px 25px gray',
        }}>
        <div class="title">
          <h3>Table title</h3>
        </div>
        <div class="buttons">
          <button style={{margin: 2, width: '100%'}}>Guardar</button><br />
          <button style={{margin: 2, width: '100%'}}>Eliminar</button><br />
          <button style={{margin: 2, width: '100%'}}>Buscar</button><br />
          <button style={{margin: 2, width: '100%'}}>Listar</button><br />
        </div>
        <div class="inputs">
          <label style={{width: '20%'}}>Codigo: </label><input style={{width: '50%'}}></input><br />
          <label style={{width: '20%'}}>Nombre: </label><input style={{width: '50%'}}></input>

        </div>
        <div class="table">

            {sampleData.length > 0 && (
              <table>
                <thead>
                  <tr>
                    {keys.map((item, idx) => (
                      <th key={idx}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr key={idx}>
                      {keys.map((key, idx) => (
                        <td>{item[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
        </div>
      </div>

    </>
  );
};

export default App;