import React, { useRef, useState } from 'react';
import * as C from './style';
import { useSpring, animated } from 'react-spring';
import {FiLoader} from 'react-icons/fi'

export const ModalButton = ({ showModal, setShowModal}) => {

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [office, setOffice] = useState('');
  const [linkLikedin, setLinkLinkedin] = useState('');
  const [linkGithub, setLinkGithub] = useState('');
  const [devArea, setDevArea] = useState('')
  const [radioAreaOffice, setRadioAreaOffice] = useState('')
  const [loading, setLoading] = useState(false);
  
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

    function handleSubmit(e){
      e.preventDefault()
      setLoading(true);

      if(name && office && linkLikedin && linkGithub){
        const dataDev = {
          name: name,
          photo: photo,
          office: office,
          linkLinkedin: linkLikedin,
          linkGithub: linkGithub,
          devArea: devArea,
          radioAreaOffice: radioAreaOffice
        }
        saveDev(dataDev)
        console.log(dataDev);

        setShowModal(false);
        setName('')
        setPhoto('')
        setOffice('')
        setLinkLinkedin('')
        setLinkGithub('')
        setDevArea('')
        setRadioAreaOffice('')
      }
    }
    
    function saveDev(dataDev){
      let localDevs = JSON.parse(localStorage.getItem('devs')) || [];
      localDevs.push(dataDev)
      localStorage.setItem('devs', JSON.stringify(localDevs))
      setLoading(false)
      alert('adicionado com sucesso')
    }

    return (
      <>
        {showModal ? (
          <C.Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <C.ModalWrapper showModal={showModal}>
                <C.ModalContent>
                  <form onSubmit={handleSubmit}>
                    <h1>Adicionar desenvolvedor</h1>
                    <input type="text" placeholder='Seu nome' value={name} onChange={e => setName(e.target.value)} required/>
                    <input type="text" name='photo'  placeholder='.PNG/.JPG/.JPEG' value={photo} onChange={e => setPhoto(e.target.value)}/>
                    <input type='url' name='linkLikedin'  placeholder='Link Linkedin' value={linkLikedin} onChange={e => setLinkLinkedin(e.target.value)} required/>
                    <input type="url" name='linkGithub'  placeholder='Link Github' value={linkGithub} onChange={e => setLinkGithub(e.target.value)} required/>
                    
                    <C.DevType>
                      <div>
                        <label htmlFor="front-end">Front-end</label>
                        <input type="radio" checked={radioAreaOffice === 'Front-end'} value='Front-end' onClick={e => setRadioAreaOffice(e.target.value)} id="front-end" name="front-end" readOnly/>
                      </div>
                      <div>
                        <label htmlFor="back-end">Back-end</label>
                        <input type="radio" checked={radioAreaOffice === 'Back-end'} value='Back-end' onClick={e => setRadioAreaOffice(e.target.value)} id="back-end" name="back-end" readOnly/>
                      </div>
                      <div>
                        <label htmlFor="full-stack">Full-stack</label>
                        <input type="radio" checked={radioAreaOffice === 'Full-stack'} value="Full-stack" onClick={e => setRadioAreaOffice(e.target.value)} id="full-stack" name="full-stack" readOnly/>
                      </div>
                    </C.DevType>
                    {radioAreaOffice}
                    <input type="text" name='office'  placeholder='Senioridade ex: Júnior, Pleno ou Sênior' value={office} onChange={e =>  setOffice(e.target.value)} required/>
                    <C.AreaDev>
                      <textarea value={devArea} onChange={e => setDevArea(e.target.value)} cols="30" rows="5" placeholder='Sobre você:'/>
                    </C.AreaDev>

                    <C.ButtonsDiv>
                      <C.ButtonCancel className='buttons' aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}>
                        Cancelar
                      </C.ButtonCancel>
                      <button type='submit'>
                        Cadastrar
                      </button>
                    </C.ButtonsDiv>
                    {loading && 
                    <C.Loading>
                      Salvando dev<FiLoader/>
                    </C.Loading>
                    }
                  </form>
                </C.ModalContent>
                
              </C.ModalWrapper>
            </animated.div>
          </C.Background>
        ) : null}
      </>
    );
  };


