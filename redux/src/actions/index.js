//Se crea este index para exportar las funciones que van a ser llamadas dentro del reducers

export const increment = ()=>{
    return{
        type: 'INCREMENT'
    }
}

export const decrement = ()=>{
    return{
        type: 'DECREMENT'
    }
}


export const login = ()=>{
    return{
        type: "SIGN_IN"
    }
}