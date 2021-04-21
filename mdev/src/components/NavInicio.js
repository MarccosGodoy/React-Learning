import React from 'react'
import '../style/NavInicio.css'
import arrow from '../images/Arrow.svg'
import {Link} from 'react-router-dom';

const NavInicio = ({estado, funcion}) => {
    return (
        <div className="Nav1">
            <div className={estado ? 'NavInicio activo' : 'NavInicio'}>
                <ul className="NavInicio-Navegacion">
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link to="/SobreMi">
                        <li>Sobre Mi</li>
                    </Link>
                    <Link to="/Contacto">
                        <li>Contacto</li>
                    </Link>
                    <Link to="/Conocimientos">
                        <li>Conocimientos</li>
                    </Link>
                </ul>
                <img src={arrow} alt="" className={estado ? 'arrow activo' : 'arrow'}/>
            </div>
            
        </div>
    )
}

export default NavInicio
