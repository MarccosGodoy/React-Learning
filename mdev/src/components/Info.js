import React from 'react'
import Nav from './Nav'
import python from '../Images/Logos/Python.png'
import CSS from '../Images/Logos/CSS.png'
import HTML from '../Images/Logos/Python.png'
import JavaScript from '../Images/Logos/JavaScript.png'
import AdobePS from '../Images/Logos/Adobe PS.png'
import AdobeXd from '../Images/Logos/AdobeXd.png'

const Info = () => {
    return (
        <div>
            <Nav/>
            <h4>Informacion</h4>
            <p>Mi nombre es Marcos Godoy, me dedico a desarrollar aplicaciones web, móviles, de escritorio y bots. <br/> 
                Busco con mis programas brindar soluciones para problemas cotidianos en las áreas de publicidad y la mejoría personal. <br/> 
                También ayudar a aquellas personas que tengan una idea/proyecto y quieran darle vida.
            </p>
            <div className="conocimientos-contenedor">
                <div>
                    <ul className="lenguajes-programacion">
                        <li><img src={python} alt="Python" id="python"/></li>
                        <li><img src={CSS} alt="CSS" id="CSS"/></li>
                        <li><img src={HTML} alt="HTML" id="HTML"/></li>
                        <li><img src={JavaScript} alt="JavaScript" id="JS"/></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Herramientas de Diseño</h4>
                    <ul class="herramientas-diseño">
                        <li><img src={AdobePS} alt=""/></li>
                        <li><img src={AdobeXd} alt=""/></li>
                    </ul>  
                </div>

            </div>
        </div>
    )
}

export default Info
