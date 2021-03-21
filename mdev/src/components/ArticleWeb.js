import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/ArticleWeb.css';

const ArticleWeb = ({titulo, subtitulo,descripcion1, descripcion2, precio}) => {
    return (
        <div className="article-web">
            <h5>{titulo}</h5>
            <h6>{subtitulo}</h6>
            <ul>
                <li>{descripcion1}</li>
                <li>{descripcion2}</li>
            </ul>
            <div className="precio">{precio}</div>
            <ul>
                <li>Seccion o Sub-Seccion extra: $2.500</li>
                <li>Hosting Normal Anual (http): $3.600</li>
                <li>Hosting Premium Anual (http): $6.000</li>
                <li>Certificado SSL (Pago Unico): $1.200</li>
                <li>Dominio: $Variante.- Consultar</li>
            </ul>
            <Link to='/Contacto'>Contacto</Link>
        </div>
    )
}

export default ArticleWeb
