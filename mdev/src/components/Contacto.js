import React,{useState} from 'react'
import GlobalNav from './GlobalNav'
import Bars from '../images/Bars.png'
import Cross from '../images/cross.svg'
import Contact from '../images/Contacto.png'
import WP from '../images/WP.png'
import Mail from '../images/Mail.png'
import '../style/Contacto.css'

const Contacto = () => {

    const [mostrar, setMostrar] = useState(false)

    let cross
    if (mostrar) {
        cross = <img src={Cross} alt="" className="crossc" onClick={() => setMostrar(!mostrar)}/>
    }
    else{
        cross = <img src="" alt=""className="crossc"/>
    }


    return (
        <div className="Contacto">
            <main>
                <img src={Contact} alt="" className="titulo"/>
                <section className="main-imagenes">
                    <a href="https://api.whatsapp.com/send/?phone=541131118953&text&app_absent=0" target="blank"><img src={WP} alt="" className="WP"/></a>
                    <a href="mailto:marccosdev@gmail.com" target="blank"><img src={Mail} alt="" className="Mail"/></a>
                </section>
            </main>
            <aside className="aside-contacto">
                {cross}
                <img src={Bars} alt="" className="bars" onClick={() => setMostrar(!mostrar)}/>
                <h4>Workflow</h4>
                <section className="aside-section">
                    <article>
                        <p className="numero">1</p>
                        <p className="info">Breve entrevista para hablar sobre el diseño y el contenido que va a ir dentro de la web</p>
                    </article>
                    <article>
                        <p className="numero">2</p>
                        <p className="info">Creación de prototipo en Adobe Xd para confirmación de diseño</p>
                    </article>
                    <article>
                        <p className="numero">3</p>
                        <p className="info">Desarrollo de la web en React JS</p>
                    </article>
                    <article>
                        <p className="numero">4</p>
                        <p className="info">Entrega del Producto</p>
                    </article>
                </section>
                
            </aside>
            <GlobalNav estado={mostrar}/>
            
        </div>
    )
}

export default Contacto
