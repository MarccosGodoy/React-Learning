import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/ChooseSession.css'
import Footer from './Footer'
const ChooseSession = () => {
    return (
        <div className='ChooseSession'>
            <main className='ChooseSession-Main'>
                <h4 className='Page-Tittle'>Choose Session</h4>
                <ul>
                    <Link to="/Session">
                        <li>3 Games</li>
                    </Link>
                    <Link to="/Session">
                        <li>5 Games</li>
                    </Link>
                    <Link to="/Session">
                        <li>7 Games</li>
                    </Link>
                </ul>
            </main>
            <Footer/>
        </div>
    )
}

export default ChooseSession
