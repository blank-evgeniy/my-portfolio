import React from 'react';

import Logo from './../../images/github-logo.png';
import './Style.scss';
import { motion } from 'framer-motion';

const paragraphAnimation = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.2,
            duration: 1,
        },
    },
};

const Header: React.FC = () => {
    return (
        <header className="header">
            <motion.a
                className="header__git-link"
                href="https://github.com/blank-evgeniy/my-portfolio"
                target="_blank"
                initial={{ x: -200 }}
                animate={{ x: -20 }}
                whileHover={{ x: 0, opacity: 0.8 }}
                transition={{ duration: 0.5 }}
            >
                <img className="header__git-logo" src={Logo} />
            </motion.a>
            <motion.div
                className="container"
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    className="header__name"
                    variants={paragraphAnimation}
                >
                    Евгений Бланк
                </motion.p>
                <motion.p
                    className="header__profession"
                    variants={paragraphAnimation}
                >
                    frontend developer
                </motion.p>
            </motion.div>
        </header>
    );
};

export default Header;
