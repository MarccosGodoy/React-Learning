import React from 'react'
import {Link} from 'react-router-dom';

const Programa = ({icono, titulo, descripcion, direccion,precio, video, descripcion2, pagTitulo, pagDescripcion, paso1,paso2,paso3}) => {
    return (
        <div>
            <header>
                <h5>{pagTitulo}</h5>
                <h6>{pagDescripcion}</h6>
                <a href="">Navegar</a>
            </header>
            <section>
                <h4>Descripcion</h4>
                <p>{descripcion2}</p>
            </section>
            <section>
                <div className="explicacion">
                    <h4>Como funciona</h4>
                    <div className="como-funciona">
                        <li>{paso1}</li>
                        <li>{paso2}</li>
                        <li>{paso3}</li>
                    </div>
                    <p>Listo!</p>
                    <a href="">Obtener</a>
                </div>
                <div className="video">
                    <iframe src={video} frameborder="0"></iframe>
                </div>
            </section>
            <section>
                <div>
                    <div className="icono">{icono}</div>
                    <h6>{titulo}</h6>
                    <p>{descripcion}</p>
                    <p>{precio}</p>
                    <a href={direccion}>Comprar</a>
                </div>
            </section>
        </div>
    )
}

export default Programa
