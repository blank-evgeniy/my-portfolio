import React from 'react';

import Photo from './../../images/my-photo.jpg'
import './Style.scss';

const About: React.FC = () => {
    return (
        <section className='about'>
            <h2 className='about__title title'>Обо мне</h2>
            <div className='about__info'>
                <p className='about__description'>
                    Меня зовут Евгений. Мой любимый вкус лейс это паприка, 
                    но также я люблю и начос из кб(мне всегда было интересно, 
                    продается ли он в других магазинах)
                </p>
                <img className='about__photo' src={Photo} alt='my photo'></img>
            </div>
        </section>
    );
};

export default About;