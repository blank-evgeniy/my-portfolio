import React from 'react';

import './Style.scss';
import ProjectsItem from '../ProjectsItem/ProjectsItem';

const Projects: React.FC  = () => {
    return (
        <section className='projects'>
            <h2 className='projects__title title'>Проекты</h2>
            <ProjectsItem number={1}/>
            <ProjectsItem number={2}/>
            <ProjectsItem number={3}/>
        </section>
    );
};

export default Projects;