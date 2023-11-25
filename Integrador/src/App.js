import React,{useEffect, useState} from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {

  const [tareas, setTareas] = useState([]);

  const sumarTarea = (nombreTarea) => {
    let id_aux = tareas.length +1;
    //LA SIGUIENTE VARIABLE LA UTILIZO PARA BORRAR ESPACIOS ANTERIORES AL NOMBRE DE LA TAREA
    let nombreTareaSinEspacio = nombreTarea.trim();
    setTareas(
      [...tareas, {
        id: id_aux,
        nombre_tarea: nombreTareaSinEspacio,
        completada: false
      }]
    )
  };

  const eliminarTarea = (id) => {
    let opcion = window.confirm ("¿Realmente desea eliminar la tarea?");
    if (opcion) {
        let nuevaListaTareas = tareas.filter(tarea => tareas.id !== id);
        setTareas(nuevaListaTareas);
    }
  }

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
  }, [tareas]) //COLOCO [tareas] para indicar que cuando esa variable cambie se lleve a cabo el localStorage.setItem

  return (

    <div className="App"> 

      <div>
        {/*DEBAJO PASO COMO PARÁMETRO LA FUNCIÓN sumarTares PARA AGREGAR LA NUEVA TAREA A LA LISTA*/}
        <TaskForm agregarTarea={sumarTarea}/>
        <TaskList tareas={tareas}/>
        <button onClick={()=>{eliminarTarea(1)}}>Eliminar</button>
      </div>

    </div>
  )
};  


export default App;
