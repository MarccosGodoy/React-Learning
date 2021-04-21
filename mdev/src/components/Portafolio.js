import React,{useState} from 'react'
import GlobalNav from './GlobalNav'
import Bars from '../images/Bars.png'
import Cross from '../images/cross.svg'
import Logo from '../images/Logo.png'
import {Link} from 'react-router-dom';
import '../style/Portafolio.css'

const Portafolio = ({imagend, imagendm, contador, titulo, descripcion, descripcion2, estado,siguiente,anterior,url, color}) => {

    const [mostrar, setMostrar] = useState(false)
    

    const web = ()=>{
        window.open(url);
    }

    let cross
    if (mostrar) {
        cross = <img src={Cross} alt="" className="crossport" onClick={() => setMostrar(!mostrar)}/>
    }
    else{
        cross = <img src="" alt=""className="crossport"/>
    }


    return (
        <div className="Portafolio">
            <main className="main-portfolio">
                <Link to="/">
                    <img src={Logo} alt="" className="logo"/>
                </Link>
                
                <div className="porfolio-switcher">
                    <Link className={estado ? 'escritorio activo' : 'escritorio'} style={estado ? {color: "white"}: {color: color}}>Escritorio</Link>
                    <Link className={estado ? 'movil activo' : 'movil'} style={estado ? {color: color}: {color: "white"}}>Movil</Link>
                </div>
                <img src={imagend} alt="" className={estado ? 'imagend activo' : 'imagend'} onClick={web}/>
                <img src={imagendm} alt="" className={estado ? 'imagendm activo' : 'imagendm'} onClick={web}/>
                <div className="porfolio-navegacion">
                    <Link to={anterior} className="back-foward">←</Link>
                    <p className="contador">{contador}</p>
                    <Link to={siguiente} className="back-foward">→</Link>
                </div>
            </main>
            <aside style={{background: color}}>
                {cross}
                <img src={Bars} alt="" className="bars" onClick={() => setMostrar(!mostrar)}/>
                <section className="aside-portfolio">
                    <article>
                        <h4 className="porfolio-titulo">{titulo}</h4>
                        <p className="info">{descripcion} <br/> {descripcion2}</p>
                    </article>
                </section>
                
            </aside>
            <GlobalNav estado={mostrar}/>
            
        </div>
    )
}

export default Portafolio
