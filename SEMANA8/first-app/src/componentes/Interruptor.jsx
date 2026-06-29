import { useState } from "react";

export function Interruptor () {
    const [encendido, setEncendido] = useState(false);
    return(
        <div style={{padding: '20px', marginTop: '10px', background: encendido ? '#fffde7': '#e03030', color: '#333'}} >
            <h3>Interruptor</h3>
            <p>La luz esta: <strong>{encendido ? 'ENCENDIDO': 'APAGADA'}</strong></p>
            <button onClick={() => setEncendido(!encendido)}>{encendido ? 'Apagar': 'Encender'}</button>
        </div>
    )
}


import React from 'react'
import {Interruptor} from './components/luzAlternable'

const App = () => {
    return(
        <div stye={{padding: '15px', margin: '10px'}}>
            <h3>Interruptor</h3>
            <Interruptor/>
        </div>
    )
}

export default App;