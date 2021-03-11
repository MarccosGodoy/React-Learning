import React from 'react'

const Tweet = ({name}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>This is a random tweet</p>
            <h3>Number of likes</h3>
        </div>
    )
}

export default Tweet

/* Props son parametros que se le ingresan al componente creado. Los props son los atributos en html, para utilizarlos es cuestion de poner "props." seguido del nombre del atributo*/