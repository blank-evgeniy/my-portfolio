import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './Style.scss';
import projects from '../../data/projects';
import Modal from '../Modal/Modal';
import DetailProject from '../DetailProject/DetailProject';

const projectAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const ProjectsList: React.FC = () => {
    const path = './projects/';
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<number>(0);

    const handleProjectClick = (index: number) => {
        setModalActive(true);
        setCurrentProject(index);
    };

    return (
        <div className="projects-list">
            {projects.map((project, index) => (
                <motion.div
                    className="project"
                    key={index}
                    variants={projectAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5, once: true }}
                >
                    <div className="wrapper">
                        <h2 className="project__name">{project.name}</h2>
                        <p className="project__description">
                            {project.description}
                        </p>
                    </div>
                    <img
                        onClick={() => {
                            handleProjectClick(index);
                        }}
                        className="project__photo"
                        src={path + project.photos.mainPhoto}
                        alt={project.name}
                    />
                </motion.div>
            ))}
            <Modal setActive={setModalActive} active={modalActive}>
                <DetailProject
                    project={projects[currentProject]}
                    setActive={setModalActive}
                />
            </Modal>
        </div>
    );
};

export default ProjectsList;
