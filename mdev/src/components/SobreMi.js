import React,{useState} from 'react'
import '../style/SobreMi.css'
import SobreM from '../images/Sobre Mi.png'
import Pick from '../images/Pick.png'
import GlobalNav from './GlobalNav'
import Bars from '../images/Bars.png'
import Cross from '../images/cross.svg'
import { getAllByAltText } from '@testing-library/dom'



const SobreMi = () => {
    const [mostrar, setMostrar] = useState(false)

    let cross
    if (mostrar) {
        cross = <img src={Cross} alt="" className="crossmi" onClick={() => setMostrar(!mostrar)}/>
    }
    else{
        cross = <img src={Cross} alt=""className="crossmi" onClick={() => setMostrar(!mostrar)}/>
    }

    return (
        <div className="SobreMi">
            <main>
                <img src={SobreM} alt="" className="titulo"/>
                <p>Mi nombre es Marcos Godoy <br/>
                Desde que tengo memoria estoy ligado con la creatividad y la tecnología. <br/>
                Mis primeros roces con lo digital fueron por el lado del diseño, la fotografía y el dibujo. <br/>
                Por varios años me dediqué a crear videos y dibujos digitales personalizados. <br/>
                Con el correr del tiempo encontré la programación y siempre me interesó crear cosas, apenas vi todo lo que se podía lograr quede fascinado <br/>
                Estoy interesado en trabajar en nuevos proyectos que me presenten retos y me ayuden a seguir ampliando mi conocimiento
                </p>
            </main>
            <aside>
                {cross}
                <img src={Bars} alt="" className="bars" onClick={() => setMostrar(!mostrar)}/>
                
                <img src={Pick} alt="" className="pick"/>
            </aside>
            <GlobalNav estado={mostrar}/>
            
        </div>
    )
}

export default SobreMi

