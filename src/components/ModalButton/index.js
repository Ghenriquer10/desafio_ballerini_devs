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
          linkGithub: linkGithub
        }
        saveDev(dataDev)
        console.log(dataDev);

        setShowModal(false);
        setName('')
        setPhoto('')
        setOffice('')
        setLinkLinkedin('')
        setLinkGithub('')
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
                    <input type="text" name='office'  placeholder='Cargo' value={office} onChange={e =>  setOffice(e.target.value)} required/>
                    <input type='url' name='linkLikedin'  placeholder='Link Linkedin' value={linkLikedin} onChange={e => setLinkLinkedin(e.target.value)} required/>
                    <input type="url" name='linkGithub'  placeholder='Link Github' value={linkGithub} onChange={e => setLinkGithub(e.target.value)} required/>
                    
                    <C.DevType>
                      <div>
                        <label for="contactChoice1">Front-end</label>
                        <input type="radio" id="contactChoice1"
                        name="contact" value="email"/>
                      </div>
                      <div>
                        <label for="contactChoice2">Back-end</label>
                        <input type="radio" id="contactChoice2"
                        name="contact" value="phone"/>
                      </div>
                      <div>
                        <label for="contactChoice3">Full-stack</label>
                        <input type="radio" id="contactChoice3"
                        name="contact" value="mail"/>
                      </div>
                    </C.DevType>

                    <C.AreaDev>
                      <textarea value={devArea} onChange={e => setDevArea(e.target.value)}/>
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


