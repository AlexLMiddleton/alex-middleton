import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectsArray from './ProjectsArray.js'
import './Projects.css'


const Projects = (props) => {
    return (
        <div className="projects-main">
            <div className="projects-container">
                <h1>Projects</h1>
                <hr style={{ width: '100%' }}/>
                <div className='card-container'>
                    {ProjectsArray.map(project => <ProjectCard key={project.id} name={project.name} technologies={project.technologies} description={project.description} url={project.url} bgColor={project.bgColor} completed={project.completed} /> )}
                </div>
            </div>
        </div>
    )
}

export default Projects