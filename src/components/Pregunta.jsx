import { Fragment, useState } from "react";
import PropTypes from 'prop-types'
import Error from "./Error";

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
  //definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //funcion que lle el presupuesto

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

    // Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // si cantidad es menor a 1 y si es vacio
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);

      return;
    }

    //si pasa la validacion
    guardarError(false);
    //guardaos la cantidad total del presupuesto
    guardarPresupuesto(cantidad);
    // guardamos el restante de la cantidad
    guardarRestante(cantidad);
    
    actualizarPregunta(false)
  };

  return (
    <Fragment>
      <h2>Presupuesto Actual</h2>
      {/*Componente que muestra Mensaje de error por pantalla*/}
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Presupuesto Actual $"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="definir presupuesto"
          
        />
      </form>
    </Fragment>
  );
};


Pregunta.propTypes = {

  guardarPresupuesto : PropTypes.func.isRequired, 
  guardarRestante: PropTypes.func.isRequired,  
  actualizarPregunta : PropTypes.func.isRequired

}
export default Pregunta;

