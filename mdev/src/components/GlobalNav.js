import React from 'react'
import '../style/GlobalNav.css'
import {Link} from 'react-router-dom';
import Cross from '../images/cross.svg'

const GlobalNav = ({estado}) => {
    return (
        <div>
            <div className={estado ? 'GlobalNav activo' : 'GlobalNav'}>
                <img src={Cross} alt="" className="equis"/>
                <ul className="globalnav-ul">
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
            </div>
            
        </div>
    )
}

export default GlobalNav
