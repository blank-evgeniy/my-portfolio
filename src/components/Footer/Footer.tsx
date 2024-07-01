import React from 'react';

import './Style.scss';

const Footer: React.FC  = () => {
    return (
        <footer className='footer'>
            <div className='footer__list'>
                <a className='footer__link'><img alt='GitHub'></img></a>
            </div>
        </footer>
    );
};

export default Footer;