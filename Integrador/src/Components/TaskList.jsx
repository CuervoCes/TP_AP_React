import './task.css';


const TaskList = ({tareas}) => { //El parámetro tarea lo recibo desde app.js y lo desestructuro con las {}

  return (
    <>
      <h1 className='titulo-tareas'>Lista de Tareas</h1>
      <table className="table table-striped">
          <thead className="thead-dark encabezado-lista">
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Tarea</th>
              <th scope='col'>Completada?</th>
              <th scope='col'>Eliminar Tarea</th>
            </tr>
          </thead>
          <tbody>
            {
            tareas.map(tarea_aux => (
              <tr key={tareas.id}>
                <td className='item-lista'>
                  {tarea_aux.id}
                </td>
                <td className='item-lista'>
                  {tarea_aux.nombre_tarea}
                </td>
                <td className='item-lista'>
                  <input 
                  type="checkbox" 
                  checked={tarea_aux.done} 
                  onChange={()=> {}}
                  />
                </td>
                <td className='item-lista'>
                  <button 
                    className='btn btn-danger' 
                    value={tareas.id}
                    // onClick={eliminarTarea(tarea_aux.id)}
                    >
                    X
                  </button>
                </td>
              </tr>
              )
            )
            }
          </tbody>
      </table>
    </>
  )
}

export default TaskList
