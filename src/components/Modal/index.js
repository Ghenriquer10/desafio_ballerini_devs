import React, { useRef, useEffect, useCallback } from 'react';
import * as C from './style';
import { useSpring, animated } from 'react-spring';
import backphot from '../../assets/modal.jpg'

export const ModalButton = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 1250
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
                <C.ModalImg src={backphot} alt='camera' />
                <C.ModalContent>
                  <h1>Are you ready?</h1>
                  <p>Get exclusive access to our next launch.</p>
                  <button>Join Now</button>
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


