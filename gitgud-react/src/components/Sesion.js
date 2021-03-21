import React, {useEffect, useState} from 'react';
import Footer from './Footer'
import {Link} from 'react-router-dom';
import '../Style/Session.css'
import Board from './Board'



const Sesion = () => {


    

    let win = 0;
    let i = 0;
    let loss = 0;


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


    function wins(){
        win = win + 1
        i = i + 1
        console.log(win)
        console.log(i)
        }
    
    function losses(){
        loss = loss + 1
        i = i + 1
        console.log(loss)
        console.log(i)
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
                <Board score1='-' score2='-' score3='-'></Board>
            </main>
            <Footer/>
        </div>
    )
}

export default Sesion
