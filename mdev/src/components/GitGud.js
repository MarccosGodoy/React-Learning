import React,{useState} from 'react'
import Portafolio from './Portafolio'
import '../style/Example.css'
import GitGudd from '../images/GitGudd.png'
import GitGudm from '../images/GitGudm.png'

const GitGud = () => {

    const [mostrar, setMostrar] = useState(false)
    
    let button
    if (mostrar) {
        button = <button className="change-escritorio" onClick={() => setMostrar(!mostrar)}>close</button>
    }
    else{
        button = <button className="change-movil" onClick={() => setMostrar(!mostrar)}>open</button>
    }


    return (
        
        <div className="GitGud">
            {button}
            <Portafolio titulo="GitGud" descripcion="Web App" descripcion2="Controlador de malas rachas" contador="02" imagend={GitGudd} estado={mostrar} imagendm={GitGudm} url='https://marccosgodoy.github.io/GitGud/' siguiente="/Cestoni" anterior="/BomJogo" color="#FF4356"/>
        </div>
    )
}


export default GitGud
