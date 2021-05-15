import React,{useState} from 'react'
import Portafolio from './Portafolio'
import '../style/Example.css'
import reciped from '../images/Reciped.png'
import recipedm from '../images/Recipedm.png'


const RecipeApp = () => {

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
            <Portafolio titulo="Recipe App" descripcion="Web App" descripcion2="Consumo de API de recetas" contador="04" imagend={reciped} estado={mostrar} imagendm={recipedm}  siguiente="/BomJogo" anterior="/Cestoni" color="#D225F3" url="https://marccosgodoy.github.io/recipe-app/"/>
        </div>
    )
}
export default RecipeApp
