import { useState } from "react";


export function Contador(){
    const [contador, setContador] = useState(0);

    return(
        <div style={{padding: '20px', border: '1px solid #ccc'}}>
            <h3>Ejercicio 1: Contador</h3>
            <p>Valor Actual: <strong>{contador}</strong></p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)} stye={{marginLeft: '10px'}}>Disminuir</button>
        </div>
    )
}
//USU DEL USESTATE 
import React from 'react'
import {Contador} from './components/contador'

const App = () => {
    return (
        <div style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
            <h1>Contador</h1>
            <hr />
            <Contador/>
        </div>
    )
}

export default App