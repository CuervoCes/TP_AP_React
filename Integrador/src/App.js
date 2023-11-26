import React,{useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {

  const [tareas, setTareas] = useState([]);
  // const navigate = useNavigate()

  const sumarTarea = (nombreTarea) => {
    let id_aux = 0;
    if (tareas.length === 0){
      id_aux = 1;
    } else {
      id_aux = tareas[tareas.length-1].id + 1
    }
    
    //LA SIGUIENTE VARIABLE LA UTILIZO PARA BORRAR ESPACIOS ANTERIORES AL NOMBRE DE LA TAREA
    let nombreTareaSinEspacio = nombreTarea.trim();
    setTareas(
      [...tareas, {
        id: id_aux,
        nombre_tarea: nombreTareaSinEspacio,
        completada: false
      }]
    )
    // navigate('/');
  };

  const eliminarTarea = (id) => {
    let opcion = window.confirm ("¿Realmente desea eliminar la tarea?");
    if (opcion) {
        let nuevaListaTareas = tareas.filter(tareas => tareas.id !== id);
        setTareas(nuevaListaTareas);
    }
  }

  const modificarTarea = (id) => {
      let nuevaListaTareas = tareas.map(tarea_aux => {
                                                  if (tarea_aux.id === id){
                                                    tarea_aux.completada = true;
                                                  }
                                                  return tarea_aux;
                                                });
      setTareas(nuevaListaTareas);
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

    <BrowserRouter>
      <Routes>
        <Route path='/agregar_tarea' element={<TaskForm agregarTarea={sumarTarea}/>} />
        <Route path='/'exact element={<TaskList tareas={tareas} eliminarTarea={eliminarTarea} modificarTarea={modificarTarea}/>}/>
      </Routes>
    </BrowserRouter>

      <div>
        {/*DEBAJO PASO COMO PARÁMETRO LA FUNCIÓN sumarTares PARA AGREGAR LA NUEVA TAREA A LA LISTA*/}
        {/* <TaskForm agregarTarea={sumarTarea}/>
        <TaskList tareas={tareas} eliminarTarea={eliminarTarea} modificarTarea={modificarTarea}/> */}
        {/* <button onClick={()=>{}}>Btn de Prueba</button> */}
      </div>

    </div>
  )
};  


export default App;
