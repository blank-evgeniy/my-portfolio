import React from 'react';

import { FaGithub } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

import './Style.scss';

const Footer: React.FC  = () => {
    return (
        <footer className='footer'>
            <div className='footer__list'>
                <a className='footer__link' href='https://github.com/blank-evgeniy' target="_blank"><FaGithub size={'56px'}/></a>
                <a className='footer__link' href='https://vk.com/zhenya_ksta' target="_blank"><SlSocialVkontakte size={'56px'}/></a>
            </div>
            <p className='footer__text'>Copyright © Eugene Blank</p>
        </footer>
    );
};

export default Footer;