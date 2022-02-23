import React, { useRef, useEffect, useCallback } from 'react';
import * as C from './style';
import { useSpring, animated } from 'react-spring';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';

export const ModalButton = ({ showModal, setShowModal }) => {

    const modalRef = useRef();
    const {register, handleSubmit, formState: {erros} } = useForm();

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

    const addDev = (data, e) => {
      console.log(data);
      e.target.reset()
    }
  
    return (
      <>
        {showModal ? (
          <C.Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <C.ModalWrapper showModal={showModal}>
                <C.ModalContent>
                  <form onSubmit={handleSubmit(addDev)}>
                    <h1>Adicionar desenvolvedor</h1>
                    <input type="text" id='name' name='nameDev' {...register('nameDev', {required: true})} placeholder='Nome'/>
                    <input type="text" name='photo' {...register('photo')} placeholder='Link da sua foto'/>
                    <input type="text" name='office' {...register('office')} placeholder='Cargo'/>
                    <input type="text" name='linkLikedin' {...register('linkLikedin')} placeholder='Link Linkedin'/>
                    <input type="text" name='linkGithub' {...register('linkGithub')} placeholder='Link Github'/>
                    <C.ButtonCancel className='buttons' aria-label='Close modal'
                      onClick={() => setShowModal(prev => !prev)}
                    >
                      Cancelar
                    </C.ButtonCancel>
                    <button type='submit'>Cadastrar</button>
                  </form>
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


