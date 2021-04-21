import React,{useState} from 'react'
import Portafolio from './Portafolio'
import bomjogod from '../images/bomjogod.png'
import bomjogodm from '../images/bomjogodm.png'
import '../style/Example.css'


const BomJogo = () => {

    const [mostrar, setMostrar] = useState(false)
    
    let button
    if (mostrar) {
        button = <button className="change-escritorio" onClick={() => setMostrar(!mostrar)}>close</button>
    }
    else{
        button = <button className="change-movil" onClick={() => setMostrar(!mostrar)}>open</button>
    }


    return (
        
        <div className="BomJogo">
            {button}
            <Portafolio titulo="BomJogo" descripcion="Landing Page" descripcion2="Club Deportivo" contador="01" imagend={bomjogod} estado={mostrar} imagendm={bomjogodm} url='https://marccosgodoy.github.io/BomJogo' siguiente="/GitGud" anterior="/Cestoni" color="#e61f5b"/>
        </div>
    )
}

export default BomJogo
