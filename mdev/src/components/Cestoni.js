import React,{useState} from 'react'
import Portafolio from './Portafolio'
import '../style/Example.css'
import cestonid from '../images/cestonid.png'
import cestonidm from '../images/cestonidm.png'

const Cestoni = () => {

    const [mostrar, setMostrar] = useState(false)
    
    let button
    if (mostrar) {
        button = <button className="change-escritorio" onClick={() => setMostrar(!mostrar)}>close</button>
    }
    else{
        button = <button className="change-movil" onClick={() => setMostrar(!mostrar)}>open</button>
    }


    return (
        
        <div className="Cestoni">
            {button}
            <Portafolio titulo="Cestoni" descripcion="E-Commerce" descripcion2="Fiambreria" contador="03" imagend={cestonid} estado={mostrar} imagendm={cestonidm}  siguiente="/BomJogo" anterior="/GitGud" color="#F37125"/>
        </div>
    )
}

export default Cestoni
