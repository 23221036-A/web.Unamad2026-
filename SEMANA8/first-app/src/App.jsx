//EJEMPLO 1
import React from "react";
import Header from "./componentes/Headers";

export default function App(){
  return(
    <div>
      <Header titulo="Mi primera app con React + Vite"
      subtitulo= "Probando el paso de propiedad (props) en tiempo real"
      totalItems={1}/>
    </div>
  );
}

//ejemplo 2 

import React from "react"
import UserCard from './componentes/UserCard'

