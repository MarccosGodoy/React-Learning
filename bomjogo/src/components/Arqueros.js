import React from 'react'
import Actividad from './Actividad';
import arqueroM2 from '../images/arqueroM2.png'
import ArqueroM1 from '../images/ArqueroM1.png'
import arquero2 from '../images/arquero 2.png'

const Arqueros = () => {
    return (
        <div className="arqueros">
            <Actividad titulo="Arqueros" imagen1={ArqueroM1} imagen2={arqueroM2} imagen3={arquero2} introduccion="¿Te gusta atajar y queres un entrenamiento personalizado para trabajar tus reflejos y tecnica en el arco? Sumate a nuestro equipo" horarios="Mar. y Jue. de 20:30 a 21:30hs" partidos="Sabados 20hs"/>
        </div>
    )
}

export default Arqueros
