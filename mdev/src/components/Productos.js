import React from 'react'
import ArticleProductos from './ArticleProductos'

const Productos = () => {
    return (
        <div>
            <ArticleProductos icono="AP" titulo="Autopublicador" descripcion="Aumenta la difusion de tus productos/servicios creando publicaciones automáticas en los grupos de facebook" direccion="/AutoPublicador"/>
            <ArticleProductos icono="IM" titulo="InstaMensajes" descripcion="Mantene al día a tus clientes enviandoles mensajes directos de tus nuevos productos/servicios" direccion="/InstaMensajes"/>
        </div>
    )
}

export default Productos
