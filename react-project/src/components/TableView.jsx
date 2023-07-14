import '../App.css'
import * as React from 'react';

const TableView = ({ sampleData, title }) => {

    const data = sampleData
    const keys = Object.keys(data.length ? data[0] : {});

    return (
        <div
            class="container"
            style={{
                padding: 25,
                backgroundColor: '#f5f5f5',
                borderRadius: 15,
                boxShadow: '1px 2px 25px gray',
            }}>
            <div class="title">
                <h3>{title}</h3>
            </div>
            <div class="buttons">
                <button style={{ margin: 2, width: '100%' }}>Guardar</button><br />
                <button style={{ margin: 2, width: '100%' }}>Eliminar</button><br />
                <button style={{ margin: 2, width: '100%' }}>Buscar</button><br />
                <button style={{ margin: 2, width: '100%' }}>Listar</button><br />
            </div>
            <div class="inputs">
                <label style={{ width: '20%' }}>Codigo: </label><input style={{ width: '50%' }}></input><br />
                <label style={{ width: '20%' }}>Nombre: </label><input style={{ width: '50%' }}></input>

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
    )
}

export default TableView