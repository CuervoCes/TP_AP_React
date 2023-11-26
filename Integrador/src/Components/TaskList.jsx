import TaskItem from './TaskItem';
import './task.css';


const TaskList = ({tareas, eliminarTarea, modificarTarea}) => { //El parámetro tareas y las funcionas las recibo desde app.js y lo desestructuro con las {}

  return (
    <>
      <h1 className="titulo-tareas">Lista de Tareas</h1>
      <table className="table table-striped">
        <thead className="thead-dark encabezado-lista">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tarea</th>
            <th scope="col">Completada?</th>
            <th scope="col">Eliminar Tarea</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea_aux) => (
            <TaskItem tarea_aux={tarea_aux} modificarTarea={modificarTarea} eliminarTarea={eliminarTarea}/>
            // <tr key={tareas.id}>
            //   <td className="item-lista">{tarea_aux.id}</td>

            //   {/* REALIZO UN CHECKEO PARA VER SI LA TAREA FUE COMPLETADA Y DARLE FORMATO */}
            //   {tarea_aux.completada === false ? (
            //     <>
            //       <td className="item-lista">{tarea_aux.nombre_tarea}</td>
            //       <td className="item-lista">
            //         <input
            //           type="checkbox"
            //           checked={tarea_aux.completada}
            //           onChange={() => {
            //             modificarTarea(tarea_aux.id);
            //           }}
            //         />
            //       </td>
            //     </>
            //     ) : (
            //     <>
            //       <td className="item-lista text-danger">
            //         <del>{tarea_aux.nombre_tarea}</del>
            //       </td>
            //       <td className="item-lista">
            //       <input
            //         type="checkbox"
            //         checked={tarea_aux.completada}
            //         disabled
            //       />
            //     </td>
            //     </>
            //     )
            //   }
            //   <td className="item-lista">
            //     <button
            //       className="btn btn-danger"
            //       value={tareas.id}
            //       onClick={() => eliminarTarea(tarea_aux.id)}
            //     >
            //       X
            //     </button>
            //   </td>
            // </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TaskList
