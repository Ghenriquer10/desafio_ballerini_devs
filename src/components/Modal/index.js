import React, { useRef, useEffect, useCallback } from 'react';
import * as C from './style';
import { useSpring, animated } from 'react-spring';

export const ModalButton = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 550
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showModal ? (
          <C.Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <C.ModalWrapper showModal={showModal}>
                <C.ModalContent>
                  <h1>Adicionar desenvolvedor</h1>
                  <label>Nome:</label>
                  <input placeholder='Nome'/>
                  <label>Avatar:</label>
                  <input placeholder='Link da sua foto'/>
                  <label>Cargo:</label>
                  <input placeholder='Cargo'/>
                  <label>Github:</label>
                  <input placeholder='Link do seu perfil'/>
                  <label>Linkedin</label>
                  <input placeholder='Link do seu perfil'/>
                </C.ModalContent>
                <C.CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </C.ModalWrapper>
            </animated.div>
          </C.Background>
        ) : null}
      </>
    );
  };


