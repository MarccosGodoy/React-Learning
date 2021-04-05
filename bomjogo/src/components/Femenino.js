import React from 'react'
import Actividad from './Actividad'
import ffmovil from '../images/femeninoM1.png'
import fgmovil from '../images/F Grupal Movil.png'
import fgescritorio from '../images/fgescritorio.png'


const Femenino = () => {
    return (
        <div>
            <Actividad titulo="Futbol Femenino" imagen1={ffmovil} imagen2={fgmovil} imagen3={fgescritorio}  introduccion="¿Tenes ganas de entrar a algun equipo para jugar? ¿Siempre quisiste aprender y no te animaste? Forma parte de nuestro grupo, no importa que nivel tengas, sos bienvenida!" horarios="Mie. y Vie. de 20:30 a 21:30hs" partidos="Domingos 20hs"/>
        </div>
    )
}

export default Femenino
