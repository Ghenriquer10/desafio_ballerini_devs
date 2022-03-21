import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as C from "./style";
import { toast } from 'react-toastify';

export const ModalEdit = ({modalEdit, setModalEdit, devIndex, devs}) => {

    const editRef = useRef();

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [office, setOffice] = useState('');
    const [linkLinkedin, setLinkLinkedin] = useState('');
    const [linkGithub, setLinkGithub] = useState('');
    const [devArea, setDevArea] = useState('')
    const [radioAreaOffice, setRadioAreaOffice] = useState('')

    const animation = useSpring({
        config: {
          duration: 550
        },
        opacity: modalEdit ? 1 : 0,
        transform: modalEdit ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeEditModal = e => {
        if (editRef.current === e.target) {
          setModalEdit(false);
        }
      };

      function handleEdit(e){
          e.preventDefault()
          const editedDev = {
            name: name === '' ? devs[devIndex].name : name,
            photo: photo === '' ? devs[devIndex].photo : photo,
            office: office === '' ? devs[devIndex].office : office,
            linkLinkedin: linkLinkedin === '' ? devs[devIndex].linkLinkedin :  linkLinkedin,
            linkGithub: linkGithub === '' ? devs[devIndex].linkGithub : linkGithub,
            devArea: devArea === '' ? devs[devIndex].devArea : devArea,
            radioAreaOffice: radioAreaOffice === '' ? devs[devIndex].radioAreaOffice : radioAreaOffice
          }

          EditDev(editedDev)
      }

      function EditDev(editedDev){
          devs[devIndex] = editedDev
          localStorage.setItem('devs', JSON.stringify(devs))
          toast.success('Editado com sucesso!')
          setModalEdit(false)
      }

    return(
        <>
            {modalEdit ? (
                <C.DetailsBackground onClick={closeEditModal} ref={editRef}>
                    <animated.div style={animation}>
                        <C.EditWrapper modalEdit={modalEdit}>
                            <C.DetailContent>
                                <C.Item key={devs[devIndex].name}>
                                    <C.DevData>
                                        <form onSubmit={handleEdit}>
                                            <label>Nome:</label>
                                            <input type="text" value={devs[devIndex].name} onChange={e => setName(e.target.value)}readOnly/>
                                            <label>Foto:</label>
                                            <input type="text" defaultValue={devs[devIndex].photo} onChange={e => setPhoto(e.target.value)} />
                                            <label>Cargo</label>
                                            <C.EditDevType>
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
                                            </C.EditDevType>
                                            <label>Nível</label>
                                            <input type="text" defaultValue={devs[devIndex].office} onChange={e => setOffice(e.target.value)}/>
                                            <label>Link Github</label>
                                            <input type="url" defaultValue={devs[devIndex].linkGithub} onChange={e => setLinkGithub(e.target.value)}/>
                                            <label>Link Linkedin:</label>
                                            <input type="url" defaultValue={devs[devIndex].linkLinkedin} onChange={e => setLinkLinkedin(e.target.value)}/>
                                            <label>Sobre você:</label>
                                            <input type="text" defaultValue={devs[devIndex].devArea} onChange={e => setDevArea(e.target.value)}/>
                                            <C.DevsButton>
                                                <button onClick={() => setModalEdit(prev => !prev)} className='devEdit'>Fechar</button>
                                                <button type='submit'>Editar</button>
                                            </C.DevsButton>
                                        </form>
                                    </C.DevData>
                                </C.Item>
                            </C.DetailContent>
                        </C.EditWrapper>
                    </animated.div>
                </C.DetailsBackground>
            ): null}
        </>
    )
};