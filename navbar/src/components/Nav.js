import React from 'react'

const Nav = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li><a href="">home</a></li>
            </ul>
        </div>
    )
}

export default Nav
