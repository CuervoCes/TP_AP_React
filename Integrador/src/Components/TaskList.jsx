import './task.css';

const TaskList = ({tareas}) => { //El parámetro tarea lo recibo desde app.js y lo desestructuro con las {}
  return (
    <>
      <h1 className='titulo-tareas'>Lista de Tareas</h1>
      <table class="table table-striped">
          <thead class="thead-dark encabezado-lista">
            <tr>
              <th scope='col'>Tareas</th>
              <th scope='col'>Completada?</th>
            </tr>
          </thead>
          <tbody>
            {
            tareas.map(tarea_aux => (
              <tr key={tareas.id}>
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
