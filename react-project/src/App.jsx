import * as React from "react";

import "./App.css";
import sampleData from "./assets/sampleData";
import MyView from "./MyView";


const App = () => {

  React.useEffect(() => {
    console.log(sampleData);
  });

  const options = [
    { label: "Seleccione una tabla.", value: "1" },
    { label: "Tabla de Productos", value: "2" },
  ];

  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [view, setView] = React.useState(true);
  const generateView = async () => {
    console.log("Generador fue ejecutado.");
    setView(false)
  };

  return (
    <>
      {view ? (
        <div
          style={{
            padding: 50,
            paddingLeft: 75,
            paddingRight: 75,
            backgroundColor: "#f5f5f5",
            borderRadius: 15,
            boxShadow: "1px 2px 25px gray",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png"
            style={{
              height: "250px",
            }}
          />

          <h1>Generador de código</h1>
          <p>Selecciona tabla deseada:</p>

          <select value={value} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

          {value && (
            <button role="link" onClick={() =>     setView(false)
            }>
              Go
            </button>
          )}
        </div>
      ) : (
        <MyView/>
      )}
    </>
  );
};

export default App;
