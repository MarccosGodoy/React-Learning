
import { useSelector,useDispatch } from "react-redux";
import {increment, decrement, login} from './actions'

function App() {

  //Se llaman los reducers
  const counter = useSelector(state=>state.counter) 

  const isLogged = useSelector(state=> state.isLogged)

  // Se utiliza "useDispatch" para llamar las funciones creadas en "actions" para los reducers que se encuentran en "Reducers"
 
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(increment())}>+</button>
      {isLogged ? <h3>Valuable information i shouldn't see: </h3> : <h3>No estas logueado</h3>}
      <button onClick={()=> dispatch(login())}>Loggin</button>
    </div>
  );
}

export default App;
