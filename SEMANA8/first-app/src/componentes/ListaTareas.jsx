export function ListaTareas() {
    return(
        <div stye={{padding: '20px', marginTop: ' 10px', border: '1px soid #ccc'}}>
            <h3>Lista de Tareas</h3>
            <form onSubmit={agregarTarea}>
                <input type="text"
                value = {nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placehoder="Nueva tarea... "
                />
                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {tareas.map((tarea)=>(
                    <li key={tarea.id}>{tarea.texto}</li>
                ))}
            </ul>
        </div>
    );
}


//EJEMPLLO 3
import React from 'react'
import {ListaTareas} from './components/listas'
const App = () => {
    return(
        <div>
            <h2>Lista de tarea</h2>
            <istaTareas/>
        </div>
    )
}
export default App