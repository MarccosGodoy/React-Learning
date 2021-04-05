import React from 'react'
import Actividad from './Actividad'
import mgmovil from '../images/M Grupal Movil.png'
import MasculinoM1 from '../images/MasculinoM1.png'
import mgescritorio from '../images/mgescritorio.png'



const Masculino = () => {
    return (
        <div>
            <Actividad titulo="Futbol Masculino" imagen1={MasculinoM1} imagen2={mgmovil} imagen3={mgescritorio} introduccion="¿Tenes ganas de entrar a un equipo serio, entrenar y competir en torneos todos los findes? Sumate a nuestro equipo. Entrenamiento fisico y tactico de futsal" horarios="Mar. y Jue. de 20:30 a 21:30hs" partidos="Sabados 20hs"/>
        </div> 
    ) 
}

export default Masculino
