import React from 'react';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";



import './Style.scss';

const Skills: React.FC  = () => {
    return (
        <section className='skills'>
            <h2 className='skills__title title'>Мои навыки</h2>
            <div className='skills__list'>
                <FaHtml5 size={'128px'} className='skills__item'/>
                <FaCss3Alt size={'128px'} className='skills__item'/>
                <SiJavascript size={'128px'} className='skills__item'/>
                <SiTypescript size={'128px'} className='skills__item'/>
                <SiSass size={'128px'} className='skills__item'/>
                <RiTailwindCssFill size={'128px'} className='skills__item'/>
                <FaReact size={'128px'} className='skills__item'/>
                <SiRedux size={'128px'} className='skills__item'/>
            </div>
        </section>
    );
};

export default Skills;