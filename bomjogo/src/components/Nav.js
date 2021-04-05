import React from 'react'
import {Link} from 'react-router-dom';
import '../style/Nav.css';
const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>     
                </li>
                <li>
                    <Link to="/Femenino">
                        F.Femenino
                    </Link>
                </li>
                <li>
                    <Link to="/Masculino">
                    F.Masculino
                    </Link>
                </li>
                <li>
                    <Link to="/Arqueros">
                    Arqueros
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
