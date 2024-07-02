import React, { useState } from 'react';

import './Style.scss'
import projects from '../../data/projects';
import Modal from '../Modal/Modal';
import DetailProject from '../DetailProject/DetailProject';

const ProjectsList: React.FC = () => {
    const path = './projects/';
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<number>(0);

    const handleProjectClick = (index: number) => {
        setModalActive(true);
        setCurrentProject(index);
    }

    return (
        <div className='projects-list'>
            {projects.map( (project, index) => 
                <div className='project' key={index}>
                    <p className='project__description'>{project.description}</p>
                    <img onClick={() => {handleProjectClick(index)}} className='project__photo' src={path + project.photos.mainPhoto} alt={project.name}/>
                </div> 
            )}
            {modalActive && 
            <Modal setActive={setModalActive}>
                <DetailProject project={projects[currentProject]} setActive={setModalActive}/>
            </Modal>
            }
        </div>
    );
};


export default ProjectsList;