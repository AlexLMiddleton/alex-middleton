import React from 'react'

import './ProjectCard.css'

const ProjectCard = (props) => {
    return (
        <div className='card-container'>
            <div className='title-container' style={{ backgroundColor: `${props.bgColor}`}}>
                <h1 className='title-header'>{props.name}</h1>
            </div>
            <div key={props.id} className='info-container'>
                <h2>{props.name}</h2>
                <hr />
                <p><strong>Technologies: </strong>{props.technologies}</p>
                <p><strong>Description: </strong>{props.description}</p>
                {props.completed ? <h4>Completed</h4> : <h4>Under Construction</h4>}
                <a href={props.url}><strong>View</strong></a>
            </div>
        </div>
    )
}

export default ProjectCard