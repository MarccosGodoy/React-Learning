import React from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom';
import web1 from '../Images/web1.png'
import web2 from '../Images/web2.png'
import ArticleWeb from './ArticleWeb';

const WebDesign = () => {
    return (
        <div>
            <header>
                <Nav/>
                <h4>Diseño Web <br/> Personalizado</h4>
                <p>Diseños atractivos y dinámicos que daran una imagen profesional a su empresa</p>
                <Link to='/Contacto'>
                    Contacto
                </Link>
                <img src={web1} alt="diseño web responsive"/>
            </header>
            <main>
                <h5>Diseño responsive</h5>
                <p>Todos nuestros desarrollos se adaptan al formato de los smarthphones y tablets ademas de las computadoras de escritorio</p>
                <img src={web2} alt="diseño web responsive"/>
            </main>

            <section>
                <ArticleWeb titulo="Landing Page" subtitulo="Web de 1 sección" descripcion1="Con la informacion escencial" descripcion2="Link a Redes Sociales" precio="$5.000"/>
                <ArticleWeb titulo="Tienda Online" subtitulo="Web de 4 sección" descripcion1="Hasta 30 Productos/Servicios" descripcion2="Link a Redes Sociales" precio="$15.000"/>
                <ArticleWeb titulo="Web Pro" subtitulo="Web de 5 sección" descripcion1="Hasta 45 Productos/Servicios" descripcion2="Link a Redes Sociales" precio="$20.000"/>
            </section>

            <footer>
                <h4>Formas de pago</h4>
                <article>
                    <div className="numero"> <p>1</p> </div>
                    <h5>Efectivo</h5>
                    <p>Se abona el 50% para iniciar el trabajo y el 50% al terminar</p>
                </article>
                <article>
                    <div className="numero"> <p>2</p> </div>
                    <h5>MercadoPago</h5>
                    <p>Se abona la totalidad del trabajo <br/> Hasta 6 cuotas sin interes</p>
                </article> 
                <article>
                    <div class="numero"> <p>3</p> </div>
                    <h5>Transferencia Bancaria</h5>
                    <p>Se abona el 50% para iniciar el trabajo y el 50% al terminar</p>
                </article>
                <Link to='/Contacto'>
                    Contacto
                </Link>
            </footer>
        </div>
    )
}

export default WebDesign
