import * as React from 'react';

import './App.css'

const App = () => {

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

    <div style={{
      padding: 50,
      paddingLeft: 75,
      paddingRight: 75,
      backgroundColor: '#f5f5f5',
      borderRadius: 15,
      boxShadow: '1px 2px 25px gray',
    }}>
      <h1>Code Generator</h1>
      <p>
        Selecciona tabla deseada:
      </p>

      <select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      { value && <p>Table opening in new window...</p> }
    </div>

  );
};

export default App;