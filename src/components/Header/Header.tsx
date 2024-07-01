import React from 'react';

import Logo from './../../images/github-logo.png';
import './Style.scss';

const Header: React.FC  = () => {
    return (
        <header className='header'>
            <a className='header__git-link' href='https://github.com/blank-evgeniy/my-portfolio'>
                <img className='header__git-logo' src={Logo}/>
            </a>
            <div className='container'>
                <p className='header__name'>Евгений Бланк</p>
                <p className='header__profession'>frontend developer</p>
            </div>

        </header>
    );
};

export default Header;