import React from 'react'
import '../style/ArticleInicio.css';
import {Link} from 'react-router-dom';


const ArticleInicio = ({foto, link}) => {


    return (
        <div className="Article">
            <article >
                <Link to={link} >
                    <img src={foto} alt=""/>
                </Link>
                
                <div className="sumate">
                    <Link to={link} id="sumate">
                        sumate
                    </Link>
                </div>
                
            </article>
        </div>
    )
}

export default ArticleInicio
