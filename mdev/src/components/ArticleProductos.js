import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/ArticleProductos.css';

const ArticleProductos = ({icono, titulo, descripcion, direccion}) => {
    return (
        <div className="Article-Productos">
            <div className="icono">{icono}</div>
            <div className="article-productos-descripcion">
                <h6>{titulo}</h6>
                <p>{descripcion}</p>
            </div>
            <Link to={direccion}>
                Mas Info
            </Link>
        </div>
    )
}

export default ArticleProductos
