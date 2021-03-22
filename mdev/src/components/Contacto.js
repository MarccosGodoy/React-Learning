import React from 'react'
import Nav from './Nav'
import '../Style/Contacto.css';

const Contacto = () => {
    return (
        <div className="Contacto">
            <Nav/>
            <h5>Contacto</h5>
            <div className="medios">
                <a href="mailto:marccosdev@gmail.com" target="blank">Mail</a>
                <a href="https://api.whatsapp.com/send/?phone=541131118953&text&app_absent=0" target="blank">Whatsapp</a>
                </div>
        </div>
    )
}

export default Contacto
