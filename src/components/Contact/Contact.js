import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './Contact.css'

const Contact = (props) => {
    return (
        <div className="contact-main">
            <div className="contact-text-div">
                <h1>Contact Me</h1>
                <hr style={{ width: '100%' }} />
                <div className='contact-flex'>
                    <p><FontAwesomeIcon icon={ faEnvelope } style={{ color: 'navy' }} size="2x" /><a href='mailto:AlexMiddleton@outlook.com'> Email</a></p>
                    <p><FontAwesomeIcon icon={ faLinkedin } style={{ color: 'navy' }} size="2x" /><a href='https://www.linkedin.com/in/alex-middleton/'> LinkedIn</a></p>
                    <p><FontAwesomeIcon icon={ faGithub } style={{ color: 'navy' }} size="2x" /><a href='https://github.com/alexlmiddleton'> GitHub</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact