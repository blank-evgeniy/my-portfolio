import React from 'react';

import './Style.scss';
import { project } from '../../data/projects';

type DetailProjectProps = {
    project: project,
}

const DetailProject: React.FC<DetailProjectProps> = ({project}) => {
    const path = './projects/';

    return (
        <div>
            <h3>{project.name}</h3>
            <img className='' src={path + project.photos.functionalPhoto} alt={project.name+': функционал сайта'}/>
            <img className='' src={path + project.photos.mobilePhoto} alt={project.name+': мобильная версия'}/>
            <a href={project.link} target='_blank'>Посетить сайт</a>
            <ul>
                {project.stack.map( (technology) => 
                    <p key={technology}>{technology}</p>
                )}
            </ul>
        </div>
    );
};

export default DetailProject;