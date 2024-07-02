import React from 'react';

import './Style.scss';
import { project } from '../../data/projects';

type DetailProjectProps = {
    project: project,
}

const DetailProject: React.FC<DetailProjectProps> = ({project}) => {
    const path = './projects/';

    return (
        <div className='detail-project'>
            <h3 className='detail-project__title title'>{project.name}</h3>
            <img className='detail-project__photo' src={path + project.photos.functionalPhoto} alt={project.name+': функционал сайта'}/>
            <img className='detail-project__photo' src={path + project.photos.mobilePhoto} alt={project.name+': мобильная версия'}/>


            <dl className='detail-project__stack'>
                <dt>Стек проекта:</dt>
                {project.stack.map( (technology) => 
                    <li className='detail-project__stack-item' key={technology}>{technology}</li>
                )}
            </dl>
            <a className='detail-project__link' href={project.link} target='_blank'>посетить сайт</a>

        </div>
    );
};

export default DetailProject;