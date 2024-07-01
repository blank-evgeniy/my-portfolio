import React from 'react';

import { FaGithub } from "react-icons/fa";

import './Style.scss';

const Footer: React.FC  = () => {
    return (
        <footer className='footer'>
            <a className='footer__link' href='https://github.com/blank-evgeniy'><FaGithub size={'56px'}/></a>
            <p className='footer__text'>Copyright © Eugene Blank</p>
        </footer>
    );
};

export default Footer;