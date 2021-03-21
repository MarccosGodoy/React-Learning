import React from 'react'
import Nav from './Nav'
import python from '../Images/Logos/Python.png'
import CSS from '../Images/Logos/CSS.png'
import HTML from '../Images/Logos/Python.png'
import JavaScript from '../Images/Logos/JavaScript.png'
import AdobePS from '../Images/Logos/Adobe PS.png'
import AdobeXd from '../Images/Logos/AdobeXd.png'
import '../Style/Info.css';

const Info = () => {
    return (
        <div className="info">
            <Nav/>
            <h4>Informacion</h4>
            <div className="info-contenedor">
                <p>Mi nombre es Marcos Godoy, me dedico a desarrollar aplicaciones web, móviles, de escritorio y bots. <br/> 
                    Busco con mis programas brindar soluciones para problemas cotidianos en las áreas de publicidad y la mejoría personal. <br/> 
                    También ayudar a aquellas personas que tengan una idea/proyecto y quieran darle vida.
                </p>
                <div className="conocimientos-contenedor">
                    <div>
                        <h5>Lenguajes de Programacion</h5>
                        <ul className="lenguajes-programacion">
                            <li><img src={python} alt="Python" id="python"/></li>
                            <li><img src={CSS} alt="CSS" id="CSS"/></li>
                            <li><img src={HTML} alt="HTML" id="HTML"/></li>
                            <li><img src={JavaScript} alt="JavaScript" id="JS"/></li>
                        </ul>
                    </div> 
                    <div>
                        <h5>Herramientas de Diseño</h5>
                        <ul class="herramientas-diseño">
                            <li><img src={AdobePS} alt=""/></li>
                            <li><img src={AdobeXd} alt=""/></li>
                        </ul>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Info
