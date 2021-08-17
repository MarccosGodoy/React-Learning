import React, { useReducer } from "react";

const estadoInicial = { contador: 0 }; //el estado inicial de los reducers se establece como objeto

//La funcion init se utiliza para hacerle alguna modificacion al valor inicial antes de que se pueda acceder a las acciones
const init = (estadoInicial)=>{
  return{
    contador: estadoInicial.contador + 100 //En este caso le agregamos 100 al valor inicial declarado
  }
}

//Supuestamente es buena practicatener un objeto con los tipos de acciones que va a tener el reducer
const TYPES = {
  SUMAR: "SUMAR",
  SUMAR_5: "SUMAR_5",
  RESTAR: "RESTAR",
  RESTAR_5: "RESTAR_5",
  RESET: "RESET",
};

//el reducer recibe 2 parametros, el estado anterior y la accion que va a realizar, adicionalmente puede tener un payload
function reducer(state, action) {
  switch (
    action.type //Los reducers se suelen manejar con switch, el action.tpye chequea el "dispatch.type"
  ) {
    case TYPES.SUMAR: //En el caso increment, agarra el contador y le devuelve el estado actual mas el cambio
      return { contador: state.contador + 1 };
    case TYPES.RESTAR:
      return { contador: state.contador - 1 };
    case TYPES.SUMAR_5:
      return { contador: state.contador + action.payload }; //con payload, recibimos un dato desde dispatch
      case TYPES.RESTAR_5:
      return { contador: state.contador - action.payload };
      case TYPES.RESET:
      return estadoInicial //Se devuelve el estado inicial para resetear el contador
    default:
      return state;
  }
}

const Contador = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, estadoInicial, init);
  //El reducer recibe 3 parametros, el reducer, el estado iniciar y el init (el cual es opcional)

  const sumar = () => {
    dispatch({ type: TYPES.SUMAR }); //El dispatch funcina igual que el setState pero recibe un objeto con el "tipo" de funcion que se llama, es decir, recibe el caso del switch que queremos ejecutar
  };
  const restar = () => {
    dispatch({ type: TYPES.RESTAR });
  };
  const sumar5 = () => {
    dispatch({ type: TYPES.SUMAR_5, payload: 5 }); //Se puede pasar desde el dispatch valores para utilizar en el reducer posteriormente
  };
  const restar5 = () => {
    dispatch({ type: TYPES.RESTAR_5, payload: 5  });
  };
  const reset = () => {
    dispatch({ type: TYPES.RESET });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>contador reducer</h2>
      <nav>
        <button onClick={sumar5}>SUMAR 5</button>
        <button onClick={sumar}>SUMAR 1</button>
        <button onClick={reset}>RESET</button>
        <button onClick={restar}>RESTAR 1</button>
        <button onClick={restar5}>RESTAR 5</button>
      </nav>
      <h3>{state.contador}</h3>{" "}
      {/* Se llama la variable dentro del objeto inicial */}
    </div>
  );
};

export default Contador;
