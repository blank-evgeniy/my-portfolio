import React, { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Style.scss';

const modalContentAnimation = {
    hidden: {
        y: '100vh',
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.4
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            duration: 0.2
        }
    }
}


type ModalProps = {
    active: boolean,
    setActive: (a: boolean) => void,
    children: ReactNode,
}

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {
    useEffect( () => {
        document.body.style.overflow = active? 'hidden' : 'auto';
        document.body.style.paddingRight = active? '11px' : '0';

        const keyDownHandler = (event: KeyboardEvent) => {
            console.log('User pressed: ', event.key);
      
            if (event.key === 'Escape') {
              event.preventDefault();
      
              setActive(false);
            }
          };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = '0px';
            document.removeEventListener('keydown', keyDownHandler);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])


    return (
        <AnimatePresence>
            {active && <motion.div
                className='modal'
                onClick={() => setActive(false)}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <motion.div 
                    className='modal__content'
                    onClick={e => {e.stopPropagation()}}
                    variants={modalContentAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    {children}
                </motion.div>
            </motion.div>   }
        </AnimatePresence>
       
    );
};

export default Modal;