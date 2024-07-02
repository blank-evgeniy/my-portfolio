import React, { ReactNode, useEffect } from 'react';

import './Style.scss';

type ModalProps = {
    setActive: (a: boolean) => void,
    children: ReactNode,
}

const Modal: React.FC<ModalProps> = ({setActive, children}) => {
    useEffect( () => {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '11px';

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
    }, [])


    return (
        <div 
            className='modal'
            onClick={() => setActive(false)}
        >
            <div 
                className='modal__content'
                onClick={e => {e.stopPropagation()}}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;