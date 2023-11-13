import React, {Fragment} from "react";

//función que devuelve un saludo
const appSaludo = () => {
    return(
        <Fragment>
            <div className="div-saludo">
                <h3 className='tituloSaludo'> Saludo estático </h3>
                <h2> Hola Mundo! </h2>
            </div>
        </Fragment>
    );
}

export default appSaludo; 