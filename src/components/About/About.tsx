import React from 'react';
import { motion } from 'framer-motion';

import Photo from './../../images/my-photo.jpg'
import './Style.scss';

const photoAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity:1,
        transition: {
            duration: 0.3,
        }
    }
}

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity:1,
        transition: {
            delay: 0.5,
            duration: 0.3,
        }
    }
}

const About: React.FC = () => {
    return (
        <motion.section className='about' initial='hidden' whileInView='visible' viewport={{amount: 0.7, once: true}}>
            <h2 className='about__title title'>Обо мне</h2>
            <div className='about__info'>
                <motion.p 
                    className='about__description'
                    variants={textAnimation}
                >
                    Привет!
                    <br/> <br/> Меня зовут Евгений. На данный момент 
                    я студент 4 курса на направлении "прикладная информатика".
                    <br/><br/> Я начинающий разработчик на react. У меня уже
                    есть несколько PET-проектов, которые могут показать мои навыки.
                    <br/><br/> На текущий момент моя цель устроиться на работу frontend
                    разработчиком и дальше продолжать обучаться в этом направлении.
                </motion.p>
                <motion.img 
                    className='about__photo' 
                    src={Photo} 
                    alt='my photo'
                    variants={photoAnimation}
                />
            </div>
        </motion.section>
    );
};

export default About;