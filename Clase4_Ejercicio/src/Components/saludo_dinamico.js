import React, {useState, Fragment} from 'react';

//Inicializo variables


const SaludoDinamico = (event) => {

    const [nombre, setNombre] = useState('');

    // Modificar Nombre
    const cambiar_nombre = (event) => {
        setNombre(event.target.value);
    }    

    return (
        <Fragment>
            <div className='div-saludo div-saludoDin'>
                <h2 className='tituloSaludo'>Saludo dinámico</h2>
                <input type='text' value={nombre} onChange={cambiar_nombre} />
                <h3 className='saludoDin'> Hola {nombre} </h3>
            </div>
        </Fragment>
    );
}

export default SaludoDinamico;