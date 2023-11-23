import React, { useState, Fragment } from 'react'

const Task = () => {
    const [tarea, setTarea] = useState({
        id: 0,
        nombre_tarea: '',
        completada: false
    })

    const cambiosTarea = (name, value) => {
        setTarea((prevState) => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }
    
    const guardarTarea = (e) => {
        e.preventDefault();
        console.log(tarea)
    }

    return (
    <Fragment>
        <h1>Agregar Tarea</h1>
        <form action="" className='row' onSubmit={guardarTarea}>
          <div className='col-md-3'>
              <input 
              className='form-control' 
              placeholder='Nombre de la tarea' 
              type="text"
              name='nombre_tarea'
              value={tarea.nombre_tarea}
              onChange={e => cambiosTarea(e.target.name, e.target.value)}/>
          </div>
          <div className='col-md-3'>
              <input 
              className='form-control' 
              type="checkbox" 
              name='completada'
              id='completada'
              value={tarea.completada}
              //EN EL EVENTO ONCHANGE LLAMO A LA FUNCIÓN Y LE PASO LOS VALORES TARGET.NAME Y TARGET.VALUE/CHECKED
              onChange={e => cambiosTarea(e.target.name, e.target.checked)}/>
              <label htmlFor="completada">¿Completada?</label>
          </div>
          <div className='col-md-3'>
              <button className='btn btn-primary' type=''>Guardar</button>
          </div>
        </form>
    </Fragment>
  )
}

export default Task
