import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };


export const contadorInit = (contadorInitialState) => {
  return {
    contador: contadorInitialState.contador + 100,
  };
};


export function contadorReducer(state, action) {
    switch (
      action.type 
    ) {
      case TYPES.SUMAR:
        return { contador: state.contador + 1 };
      case TYPES.RESTAR:
        return { contador: state.contador - 1 };
      case TYPES.SUMAR_5:
        return { contador: state.contador + action.payload }; 
      case TYPES.RESTAR_5:
        return { contador: state.contador - action.payload };
      case TYPES.RESET:
        return contadorInitialState; 
      default:
        return state;
    }
  }

