import React from 'react';

import './Style.scss';

const Skills: React.FC  = () => {
    return (
        <section className='skills'>
            <h2 className='skills__title title'>Мои навыки</h2>
            <div className='skills__list'>
                <img className='skills__item' alt='html'></img>
                <img className='skills__item' alt='css'></img>
                <img className='skills__item' alt='js'></img>
            </div>
        </section>
    );
};

export default Skills;