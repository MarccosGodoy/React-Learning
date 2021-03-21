import React from 'react'
import '../Style/Footer.css'
import {Link} from 'react-router-dom';

const Footer = () => {


    const Mdev = () => {
        window.open('https://marccosdev.online')
    }

    return (
        <div className="Footer">
            <p>Made by <Link onClick={Mdev}>MDev</Link> </p>
            <div className="languages">
                <ul>
                    <Link to="/">
                        <li>English</li>
                    </Link>
                    <Link to="/">
                        <li>Español</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer
