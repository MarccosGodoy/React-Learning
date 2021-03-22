import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/Proximamente.css';

const Proximamente = () => {
    return (
        <div className="proximamente">
            <h6>Proximamente</h6>
            <Link to="/">
                Volver
            </Link>
        </div>
    )
}

export default Proximamente
