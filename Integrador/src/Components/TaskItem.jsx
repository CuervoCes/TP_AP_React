import React, { Fragment } from 'react';
import './task.css';

const Task = ({tarea_aux, modificarTarea, eliminarTarea}) => {

    return (
    <Fragment>
        {console.log (tarea_aux)}
        <tr key={tarea_aux.id}>
              <td className="item-lista">{tarea_aux.id}</td>

              {/* REALIZO UN CHECKEO PARA VER SI LA TAREA FUE COMPLETADA Y DARLE FORMATO */}
              {tarea_aux.completada === false ? (
                <>
                  <td className="item-lista">{tarea_aux.nombre_tarea}</td>
                  <td className="item-lista">
                    <input
                      type="checkbox"
                      checked={tarea_aux.completada}
                      onChange={() => {
                        modificarTarea(tarea_aux.id);
                      }}
                    />
                  </td>
                </>
                ) : (
                <>
                  <td className="item-lista text-danger">
                    <del>{tarea_aux.nombre_tarea}</del>
                  </td>
                  <td className="item-lista">
                  <input
                    type="checkbox"
                    checked={tarea_aux.completada}
                    disabled
                  />
                </td>
                </>
                )
              }
              <td className="item-lista">
                <button
                  className="btn btn-danger"
                  value={tarea_aux.id}
                  onClick={() => eliminarTarea(tarea_aux.id)}
                >
                  X
                </button>
              </td>
            </tr>
    </Fragment>
  )
}

export default Task
