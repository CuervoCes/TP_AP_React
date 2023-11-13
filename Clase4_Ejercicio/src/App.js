import React from 'react';

import Saludo from './Components/saludo';
import SaludoDinamico from './Components/saludo_dinamico';

function App() {
  return (
    <div className="App">
      <h1>Mostrar Saludos del Ejercicio 3</h1>
      <Saludo/>
      <SaludoDinamico/>
    </div>
  );
}

export default App;
