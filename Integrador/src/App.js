import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import TaskForm from './Components/TaskForm';
// import Task from './Components/Task'
import TaskList from './Components/TaskList';

function App() {

  const [tareas, setTareas] = useState([]);

  const sumarTarea = (nombreTarea) => {
    
    let id_aux = 0;
    //EL IF SOLO HAGO PARA CONTROLAR EL ID EN LA PRIMERA OCASIÓN
    if (tareas.length === 0){ 
      id_aux = 1
    } else {
      id_aux = tareas[tareas.length -1].id +1;
    }

    setTareas(
      [...tareas, {
        id: id_aux,
        nombre_tarea: nombreTarea,
        completada: false
      }]
      )
  };

  //USO EL SIGUIENTE useEffect para cargar inicialmente las tareas existentes en la sesión del navegador
  useEffect(()=>{
    let datos = localStorage.getItem('lista_tareas');
    if (datos){ //COMPRUEBO SI DATOS TIENE ALGO
      setTareas(JSON.parse(datos))
    }
  }, []) // LOS [] VACÍOS INDICAN QUE SE EJECUTE EL USEEFFECT CUANDO CARGUE LA PÁGINA

  //UTILIZO ESTE USEEFFECT PARA AGREGAR LA LISTA DE TAREAS AL STORAGE
  useEffect(()=>{
    localStorage.setItem('lista_tareas', JSON.stringify(tareas))
  }, [tareas]) //COLOCO tarea para indicar que cuando esa variable cambie se lleve a cabo el localStorage.setItem

  return (

    <div className="App"> 

      {/* <Router>

        <div className='btn-group'>
          <Link className='btn btn-dark' to={'/agregar'}> Agregar Tarea</Link>
        </div>

        <Routes>
          <Route path='/agregar'> </Route>
          <Route path='/'> <App/> </Route>
        </Routes>

      </Router> */}
      
      <div>
        {/*DEBAJO PASO COMO PARÁMETRO LA FUNCIÓN sumarTares PARA AGREGAR LA NUEVA TAREA A LA LISTA*/}
        <TaskForm agregarTarea={sumarTarea}/>
        <TaskList tareas={tareas}/>
      </div>

    </div>

  );
}

export default App;
