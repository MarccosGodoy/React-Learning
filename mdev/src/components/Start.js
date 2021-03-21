import React from 'react'
import ArticleStart from './ArticleStart'
import '../Style/Start.css';

const Start = () => {
    return (
        <div className='Start'>
           <header>
               <h1>MDev</h1>
               <h2>Desarrollo de aplicaciones web, móviles  y de escritorio</h2>
               <a href="#start-main">Navegar</a>
           </header>
           <main id='start-main'>
                <ArticleStart titulo='Diseño Web' parrafo='Desarrollo web personalizado. Con diseño Responsive. Landing Page, Tienda Online, Blog, Cv Online, etc' direccion='/WebDesign'/>
                <ArticleStart titulo='Productos' parrafo='Programas precreados para facilitar la difusion en las redes sociales' direccion='/Productos'/>
                <ArticleStart titulo='Automatizaciones' parrafo='Si tenes una tarea que hagas a diario y te gustaria realizarla de una forma automática, te puedo ayudar' direccion='/Automatizaciones'/>
                <ArticleStart titulo='Aplicaciones' parrafo='Desarrollo de aplicaciones para movil (Android/IOS) y para Pc (Linux, Mac, Windows)' direccion='/Aplicaciones'/>
           </main>
        </div>
    )
}

export default Start
