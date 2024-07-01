import React from 'react';

import './Style.scss';
import ProjectsList from '../ProjectsList/ProjectsList';

const Projects: React.FC  = () => {
    return (
        <section className='projects'>
            <div className='container'>
                <h2 className='projects__title title'>Проекты</h2>
                <ProjectsList/>
            </div>
        </section>
    );
};

export default Projects;