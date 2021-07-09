import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux'

//Se crea este index para combinar los reducers que se crean por separado

const allReducers = combineReducers(
    {
        counter: counterReducer,
        isLogged: loggedReducer
    }
)

export default allReducers;