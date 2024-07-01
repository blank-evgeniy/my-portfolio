import React from 'react';

import './Style.scss'
import projects from '../../data/projects';

const ProjectsList: React.FC = () => {
    const path = './projects/';

    return (
        <div className='projects-list'>
            {projects.map( (project) => 
                <div className='project'>
                    <p className='project__description'>{project.description}</p>
                    <img className='project__photo' src={path + project.photos.mainPhoto} alt={project.name}/>
                </div> 
            )}
        </div>
    );
};


export default ProjectsList;