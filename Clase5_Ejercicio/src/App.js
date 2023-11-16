import './App.css';
import fxColor from './Components/boton';

function App() {
  return (
    <div className="App">
      <h1>Ejercicio de la Clase 5</h1>
      <div>
        <p id='parrafo'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eum quidem dolore atque asperiores corporis itaque culpa optio! Omnis, est et voluptatibus a quaerat hic accusamus eligendi cupiditate iusto illum?
        </p>
        <button id='btn-color' onClick={fxColor}>Pintar de azul</button>
      </div>
    </div>
  );
}

export default App;
