import React from 'react';

import './Style.scss';

const Header: React.FC  = () => {
    return (
        <header className='header'>
            <a className='header__git-link'>GitHub</a>
            <p className='header__name'>Евгений Бланк</p>
            <p className='header__profession'>frontend developer</p>
        </header>
    );
};

export default Header;