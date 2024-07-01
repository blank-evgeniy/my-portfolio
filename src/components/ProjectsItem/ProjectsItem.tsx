import React from 'react';

import './Style.scss';

type ProjectsItemProps = {
    number: number,
}

const ProjectsItem: React.FC<ProjectsItemProps> = ({number}) => {
    return (
        <div>
            {'Проект' + number.toString()}
        </div>
    );
};

export default ProjectsItem;