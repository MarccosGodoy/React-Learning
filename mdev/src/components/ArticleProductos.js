import React from 'react'
import {Link} from 'react-router-dom';

const ArticleProductos = ({icono, titulo, descripcion, direccion}) => {
    return (
        <div>
            <div className="icono">{icono}</div>
            <h6>{titulo}</h6>
            <p>{descripcion}</p>
            <Link to={direccion}>
                Mas Info
            </Link>
        </div>
    )
}

export default ArticleProductos
