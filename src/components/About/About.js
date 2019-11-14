import React from 'react'

import '../../App.css'
import './About.css'

const About = () => {
    return (
        <div className="about-main">
            <div className="about-text-div">
                <div className="about-flex-container">
                    <div className="about-bio-text">
                        <h1>Who am I?</h1>
                        <hr style={{ width: '100% '}} />
                        <p>My name is Alex Middleton.  I'm a native Charlestonian currently working as a Programmer Analyst for Charleston County School District.
                            I'm extremely passionate about web development, and I'm looking to transition into a front-end or full-stack web developer role.
                        </p>
                    </div>
                    <div className="about-education-text">
                        <h1>Education</h1>
                        <hr style={{ width: '100% '}} />
                        <p>
                            <li style={{ display: 'block' }}>B.A., English -- College of Charleston</li>
                            <li>M.A., I/O Psychology -- Appalachian State University</li>
                            <li>Graduate, Full-Stack Web Development -- JRS Coding School</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About