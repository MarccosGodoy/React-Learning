import React from 'react'
import '../Style/Start.css'
import {Link} from 'react-router-dom';
import Footer from './Footer'

const Start = () => {
    return (
        
        <div>
            <main className="Start-main">
                <h1 className='Page-Tittle'>GitGud</h1>
                <h2>Take control of your games</h2>
                <div className="start-buttons">
                    <ul>
                        <Link to="/chooseSesion">
                            <li>Play</li>
                        </Link>
                        <Link to="/Tutorial">
                            <li>Tutorial</li>
                        </Link>
                    </ul>
                </div>
            </main>
            
            <Footer/>
        </div>
    )
}

export default Start
