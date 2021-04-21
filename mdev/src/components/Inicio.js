import React,{useState} from 'react'
import NavInicio from './NavInicio'
import '../style/Inicio.css'
import MDev from '../images/MDev.png'
import MDevBackground from '../images/MDev background.png'
import {Link} from 'react-router-dom';


const Inicio = () => {
    const [mostrar, setMostrar] = useState(false)
        
    let button
    if (mostrar) {
        button = <button className="boton-nav" onClick={() => setMostrar(!mostrar)}>close</button>
    }
    else{
        button = <button className="boton-nav-open" onClick={() => setMostrar(!mostrar)}>open</button>
    }

    return (
        <div className="Inicio">
            <NavInicio estado={mostrar} />
            <img src={MDev} alt="" className="titulo"/>
            <h2>Front-End Developer</h2>
            <Link to="/BomJogo" className="portafolio-boton">
                Portafolio
            </Link>
            <img src={MDevBackground} alt="" className="background"/>
            
            {button}
        </div>
    )
}

export default Inicio
