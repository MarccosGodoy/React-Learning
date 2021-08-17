import React, { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";

import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const sumar = () => {
    dispatch({ type: TYPES.SUMAR });
  };
  const restar = () => {
    dispatch({ type: TYPES.RESTAR });
  };
  const sumar5 = () => {
    dispatch({ type: TYPES.SUMAR_5, payload: 5 });
  };
  const restar5 = () => {
    dispatch({ type: TYPES.RESTAR_5, payload: 5 });
  };
  const reset = () => {
    dispatch({ type: TYPES.RESET });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>contador mejorado reducer</h2>
      <nav>
        <button onClick={sumar5}>SUMAR 5</button>
        <button onClick={sumar}>SUMAR 1</button>
        <button onClick={reset}>RESET</button>
        <button onClick={restar}>RESTAR 1</button>
        <button onClick={restar5}>RESTAR 5</button>
      </nav>
      <h3>{state.contador}</h3>{" "}
    </div>
  );
};

export default ContadorMejorado;
