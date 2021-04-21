import React,{useState} from 'react'
import GlobalNav from './GlobalNav'
import Bars from '../images/Bars.png'
import Cross from '../images/cross.svg'
import titulo from '../images/Conocimientos.png'
import Lenguajes from '../images/Lenguajes.png'
import '../style/Conocimientos.css'

const Conocimientos = () => {

    const [mostrar, setMostrar] = useState(false)

    let cross
    if (mostrar) {
        cross = <img src={Cross} alt="" className="crosscon" onClick={() => setMostrar(!mostrar)}/>
    }
    else{
        cross = <img src="" alt=""className="crosscon"/>
    }


    return (
        <div className="Conocimientos">
            <main>
                <img src={titulo} alt="" className="titulo"/>
                <img src={Lenguajes} alt="" className="Lenguajes"/>
            </main>
            <aside>
                {cross}
                <img src={Bars} alt="" className="bars" onClick={() => setMostrar(!mostrar)}/>
                <h4>Intereses</h4>
                <section className="aside-section">
                    <article>
                        <p className="info">Animación</p>
                    </article>
                    <article>
                        <p className="info">Home Server/Cloud Hosting</p>
                    </article>
                    <article>
                        <p className="info">Machine Learning</p>
                    </article>
                    <article>
                        <p className="info">Blockchain - NFT</p>
                    </article>
                </section>
                
            </aside>
            <GlobalNav estado={mostrar}/>
            
        </div>
    )
}

export default Conocimientos
