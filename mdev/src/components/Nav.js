import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/Nav.css';

const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <Link to='/'>
                    <li id="Logo">MDev</li>
                </Link>
                <Link to='/Info'>
                    <li>Info</li>
                </Link>
                <Link to='/'>
                    <li>Servicios</li>
                </Link>
                <Link to='/Productos'>
                    <li>Productos</li>
                </Link>
                <Link to='/Contacto'>
                    <li>Contacto</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
