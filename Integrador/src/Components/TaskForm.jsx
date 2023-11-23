import React, {useState} from 'react'

const TaskForm = (props) => {
  
    const [nuevaTarea, setNuevaTarea] = useState('')

    //Es el nombre típico que se usa para capturar datos
    const handleSubmit = (e) => {
        e.preventDefault(); //Evita la recarga autom. de la página luego de enviar
        localStorage.setItem('nombre_tarea', nuevaTarea)
        setNuevaTarea('');
        props.agregarTarea(nuevaTarea);
    }

    return (
    <div className='agregar-tarea container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese la nueva tarea' onChange={(e) => setNuevaTarea(e.target.value)} value={nuevaTarea}/>
        <button>Guardar Tarea</button>
      </form>
    </div>
  )
}

export default TaskForm
