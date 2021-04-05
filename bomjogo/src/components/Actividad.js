import React from 'react'
import menu from '../images/Menu.png'
import '../style/Actividad.css';
import {Link} from 'react-router-dom';

const Actividad = ({imagen1,titulo, imagen2, imagen3, introduccion, horarios, partidos}) => {
    return (
        <div className="Actividad">
            <header>
                <div className="menu">
                    <Link to="/Nav">
                        <img src={menu} alt=""/>
                    </Link>
                </div>
                <div className="header-movil">
                    <h4>{titulo}</h4>
                    <img src={imagen1} alt="" className="img1"/>
                    <a href="#main-actividad" className="accion">Info</a>
                </div>
                <div className="header-escritorio">
                    <div className="imagen">
                        <img src={imagen1} alt=""/>
                    </div>
                    <div className="texto-boton">
                        <h4>{titulo}</h4>
                        <p>Entrenamientos: <br/> {horarios}  </p>
                        <a href="#main-actividad" className="accion">Info</a>
                    </div>
                    
                </div>
            </header>
            
            <main id="main-actividad">
                <div className="main-movil">
                    <img src={imagen2} alt=""  className="img2"/>
                    <p>{introduccion}</p>
                    <a href="" className="accion">Sumate</a>
                </div>
                <div className="main-escritorio">
                    <div className="texto-boton">
                        <p>{introduccion}</p>
                        <a href="#seccion1" className="accion">Sumate</a>
                    </div>
                    <div className="imagen">
                        <img src={imagen3} alt=""/>
                    </div>
                    
                   
                </div>


            </main>

            <div className="secciones-contenedor">
                <section className="seccion1" id="seccion1">
                    <article>
                        <ul>
                            <li><h5>Contactanos</h5></li>
                            <li><p className="seccion1-descripcion">Podes hablarnos por instagram o directamente venir al proximo entrenamiento <br/>Primer clase <b>GRATIS!</b> </p></li>
                            <li><p className="precio">$1000/mes</p></li>
                            <li className="seccion1-accion"><a href="" >Instagram</a></li>
                            <li className="seccion1-accion"><a href="" >Inscribirse</a></li>
                        </ul>
                    </article>
                </section>

                <section className="seccion2">
                    <article>
                        <ul>
                            <li><p>Profe: Agustin Blencio <br/> <br/><br/>Entrenamientos: <br/> {horarios} <br/> <br/><br/>Partidos: <br/>  {partidos}<br/> <br/><br/>Ubicacion: <br/>  Pedernera 950 </p></li>
                        </ul>
                    </article>
                </section>
            </div>
            

            <footer className="footer">
                <h4>Formas de pago</h4>
                <section className="footer-section">
                    <article>
                        <div className="numero"> <p>1</p> </div>
                        <h5>Efectivo</h5>
                        <p>Podes abonar en el momento que llegues al entrenamiento o comunicarte con nostoros para coordinar el pago</p>
                    </article>
                    <article>
                        <div className="numero"> <p>2</p> </div>
                        <h5>MercadoPago</h5>
                        <p>Podes abonar con cualquier tarjeta via mercadopago</p>
                    </article> 
                    <article>
                        <div class="numero"> <p>3</p> </div>
                        <h5>Transferencia Bancaria</h5>
                        <p>Podes Abonar haciendo un giro bancario</p>
                    </article>
                </section>
            </footer>
        </div>
    )
}

export default Actividad
