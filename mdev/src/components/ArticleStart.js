import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/ArticleStart.css';

const ArticleStart = ({titulo, parrafo, direccion}) => {
    return (
        <div className="article-start-contenedor">
            <article className="article-start">

                <h5>{titulo}</h5>
                <p>{parrafo}</p>
                <Link to={direccion}>
                    Mas Info
                </Link>

            </article>
        </div>
    )
}

export default ArticleStart
