import React, { useRef, useEffect, useCallback } from 'react';
import * as C from './style';
import { useSpring, animated } from 'react-spring';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

        
        const schema = yup.object().shape({
          nameDev: yup.string().required("Digite um nome"),
          photo: yup.string().required("Link do seu avatar"),
          office: yup.string().required("Digite seu cargo Dev"),
          linkLikedin: yup.string(),
          linkGithub: yup.string()
        })
        
        const {register, handleSubmit, formState:{ errors }} = useForm({
          resolver: yupResolver(schema),
        });

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
                    <input type="text" {...register('nameDev')} placeholder='Seu nome'/>
                    <p>{errors.nameDev?.message}</p>
                    <input type="text" name='photo' {...register('photo')} placeholder='Link da sua foto'/>
                    <p>{errors.photo?.message}</p>
                    <input type="text" name='office' {...register('office')} placeholder='Cargo'/>
                    <p>{errors.office?.message}</p>
                    <input type='text' name='linkLikedin' {...register('linkLikedin')} placeholder='Link Linkedin'/>
                    <input type="text" name='linkGithub' {...register('linkGithub')} placeholder='Link Github'/>
                    <p>{errors.linkGithub?.message}</p>
                    <C.ButtonsDiv>
                      <C.ButtonCancel className='buttons' aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                        >
                        Cancelar
                      </C.ButtonCancel>
                      <button type='submit'>Cadastrar</button>
                    </C.ButtonsDiv>
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


