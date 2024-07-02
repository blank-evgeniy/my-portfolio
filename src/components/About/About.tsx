import React from 'react';

import Photo from './../../images/my-photo.jpg'
import './Style.scss';

const About: React.FC = () => {
    return (
        <section className='about'>
            <h2 className='about__title title'>Обо мне</h2>
            <div className='about__info'>
                <p className='about__description'>
                    Привет!
                    <br/> <br/> Меня зовут Евгений. На данный момент 
                    я студент 4 курса на направлении "прикладная информатика".
                    <br/><br/> Я начинающий разработчик на react. У меня уже
                    есть несколько PET-проектов, которые могут показать мои навыки.
                    <br/><br/> На текущий момент моя цель устроиться на работу frontend
                    разработчиком и дальше продолжать обучаться в этом направлении.
                </p>
                <img className='about__photo' src={Photo} alt='my photo'></img>
            </div>
        </section>
    );
};

export default About;