import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/Programa.css';

const Programa = ({icono, titulo, descripcion, direccion,precio, video, descripcion2, pagTitulo, pagDescripcion, paso1,paso2,paso3}) => {
    return (
        <div>
            <header className="programa-header">
                <div className="header-text">
                    <h5>{pagTitulo}</h5>
                    <h6>{pagDescripcion}</h6>
                </div>
                <div className="header-button-programa"><a href="#1">Navegar</a></div>
            </header>
            <section id="1" className="Programa-Descripcion">
                <h4>Descripcion</h4>
                <div className="seccion1-descripcion">
                    <p>{descripcion2}</p>
                </div>
                
                
            </section>
            <section className="Programa-comoFunciona">
                <h4>¿Como funciona?</h4>
                <div className="explicacion">
                    <div className="como-funciona">
                        <ul>
                            <li>{paso1}</li>
                            <li>{paso2}</li>
                            <li>{paso3}</li>
                            <li><p>Listo!</p></li>
                        </ul>
                        
                        <a href="">Obtener</a>
                    </div>
                    <div className="video">
                        <iframe src={video} frameborder="0"></iframe>
                    </div>
                </div>
                
            </section>
            <section className="seccion-compra">
                <article>
                    <div className="icono">{icono}</div>
                    <h6>{titulo}</h6>
                    <div className="article-productos-descripcion">
                        <p>{descripcion}</p>    
                    </div>
                    <p className="precio">{precio}</p>
                    <a href={direccion}>Comprar</a>
                </article>
            </section>
        </div>
    )
}

export default Programa
