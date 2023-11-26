import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const TaskForm = (props) => {
  
    const [nuevaTarea, setNuevaTarea] = useState('')
    const navigate = useNavigate();
    //Es el nombre típico que se usa para capturar datos
    const handleSubmit = (e) => {
      e.preventDefault(); //Evita la recarga autom. de la página luego de enviar
        setNuevaTarea('');
        props.agregarTarea(nuevaTarea);
        navigate('/');
    }

  return (
      <div className='container justify-content-center mt-5'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Ingrese la nueva tarea'
            className='m-2 row form-control text-center' 
            onChange={(e) => setNuevaTarea(e.target.value)} 
            value={nuevaTarea}
            required
          />
          <div className='d-flex justify-content-center'>
            <button className='m-2 btn btn-primary'>Agregar Tarea</button>
          </div>
        </form>
      </div>
  )
}

export default TaskForm
