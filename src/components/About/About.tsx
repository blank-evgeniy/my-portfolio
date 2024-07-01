import React from 'react';

import './Style.scss';

const About: React.FC = () => {
    return (
        <section className='about'>
            <h2 className='about__title title'>Обо мне</h2>
            <div className='about__info'>
                <p className='about__description'>текст текст текст текст</p>
                <img className='about__photo' src='' alt='my photo'></img>
            </div>
        </section>
    );
};

export default About;