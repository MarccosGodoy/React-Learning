import React, {useEffect, useState} from 'react';
import Footer from './Footer'
import {Link} from 'react-router-dom';
import '../Style/Session.css'
import Board from './Board'



const Sesion = () => {

    const [wined, setWined] = useState(0);
    const [losed, setLosed] = useState(0);
    const [midle, setMidle] = useState('-')

    const Aproved = ()=>{
        /*if(i == 3){
            window.open('/Aproved', '_self')
        }*/
    }
    const Reproved = () =>{
        /*if(i == 3){
            window.open('/Reproved', '_self')
        }*/
    }

    /*const Alerting = () =>{
        if(loss == 2 && win == 0){
            alert('Para de jogar rey')
        }
    }*/
    const wins = ()=>{
        setWined(wined + 1)
    }

    const losses = ()=>{
        setLosed(losed + 1)
    }




    
    return (
        <div>
            <main className="Session-main">
                <h4 className='Page-Tittle'>Session</h4>
                <div className="Session-buttons">
                    <ul>
                        <li><a onClick={wins}>WIN</a> </li>
                        <li><a onClick={losses}>LOSS</a> </li>
                    </ul>
                </div>
                <Board score1={wined} score2='-' score3={losed}></Board>
            </main>
            <Footer/>
        </div>
    )
}

export default Sesion
