import React from 'react'

import './Toolbar.css'

const toolbar = props => (
    <header className='nav'>
        <ul>
            <li><a href='/'>ABOUT</a></li>
            <li><a href='/'>TECHNOLOGY</a></li>
            <li><a href='/'>PORTFOLIO</a></li>
        </ul>
    </header>
    )

export default toolbar