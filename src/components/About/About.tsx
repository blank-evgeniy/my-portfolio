import React from 'react';
import { motion } from 'framer-motion';

import Photo from './../../images/my-photo.jpg';
import './Style.scss';

const photoAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.3,
        },
    },
};

const About: React.FC = () => {
    return (
        <motion.section
            className="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: true }}
        >
            <h2 className="about__title title">Обо мне</h2>
            <div className="about__info">
                <motion.div
                    className="about__description"
                    variants={textAnimation}
                >
                    <p className="about__paragraph">Привет!</p>
                    <p className="about__paragraph">
                        Меня зовут Евгений. На данный момент я студент 4 курса
                        на направлении "прикладная информатика".
                    </p>
                    <p className="about__paragraph">
                        Я начинающий frontend-разработчик на react. У меня есть
                        несколько PET-проектов, которые демонстрируют мои
                        навыки.
                    </p>
                    <p className="about__paragraph">
                        Сейчас моя основная цель - устроиться на работу, чтобы
                        получить коммерческий опыт рарзработки, а также дальше
                        совершенствоваться в своем направлении.
                    </p>
                </motion.div>
                <motion.img
                    className="about__photo"
                    src={Photo}
                    alt="my photo"
                    variants={photoAnimation}
                />
            </div>
        </motion.section>
    );
};

export default About;
