import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Hero.css'

library.add(faArrowDown)
// onClick={() => ref.current.scrollIntoView()}
const Hero = () => (
    <div className='hero-main' style={{ height: '100vh' }}>
        <div className='hero-sub'>
            <h1>Hi, I'm Alex!</h1>
        </div>
        <div className="circle-container">
            <Link>
                <FontAwesomeIcon icon={faArrowDown} style={{ color: 'blue' }} size="6x" />
            </Link>
        </div>
    </div>
)
export default Hero