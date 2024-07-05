import React from 'react';

import { IoClose } from 'react-icons/io5';

import './Style.scss';
import { project } from '../../data/projects';

type DetailProjectProps = {
    project: project;
    setActive: (active: boolean) => void;
};

const DetailProject: React.FC<DetailProjectProps> = ({
    project,
    setActive,
}) => {
    const path = './projects/';

    return (
        <div className="detail-project">
            <button
                className="detail-project__close"
                onClick={() => setActive(false)}
            >
                <IoClose size={'48px'} />
            </button>

            <h3 className="detail-project__title title">{project.name}</h3>

            <img
                className="detail-project__photo"
                src={path + project.photos.functionalPhoto}
                alt={project.name + ': функционал сайта'}
            />
            <img
                className="detail-project__photo detail-project__photo_mobile"
                src={path + project.photos.mobilePhoto}
                alt={project.name + ': мобильная версия'}
            />

            <dl className="detail-project__stack">
                <dt>Стек проекта:</dt>
                {project.stack.map((technology) => (
                    <li className="detail-project__stack-item" key={technology}>
                        {technology}
                    </li>
                ))}
            </dl>
            <a
                className="detail-project__link"
                href={project.link}
                target="_blank"
            >
                посетить сайт
            </a>
        </div>
    );
};

export default DetailProject;
