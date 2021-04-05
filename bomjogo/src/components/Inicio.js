import React from 'react'
import ArticleInicio from './ArticleInicio'
import fm from '../images/Masculino.png'
import ff from '../images/Femenino.png'
import ar from '../images/Arqueros.png'
import remera from '../images/remera.png'
import remeraescritorio from '../images/remera-escritorio.png'
import fondo1 from '../images/Fondo1.png'
import menu from '../images/Menu.png'
import '../style/Inicio.css';
import {Link} from 'react-router-dom';

const Inicio = () => {
    return (
        <div className="Inicio">
            <header>
                <nav>
                    <h1>BOMJOGO</h1>
                    <div className="menu">
                        <Link to="/Nav">
                            <img src={menu} alt=""/>
                        </Link>
                    </div>
                </nav>
                
                <div className="header-fondo">
                    <img src={fondo1} alt="fondo" id="fondo1"/>
                    <img src={remera} alt="remera" id="remera"/>
                    <img src={remeraescritorio} alt="remera" id="remera2"/>
                </div>
                <a className="navegar" href="#main-inicio">Navegar</a>
            </header>
            <main id="main-inicio">
                <ArticleInicio foto={ff} link="/Femenino"/>
                <ArticleInicio foto={fm} link="/Masculino"/>
                <ArticleInicio foto={ar} link="/Arqueros"/>
            </main>
            
        </div>
    )
}

export default Inicio
