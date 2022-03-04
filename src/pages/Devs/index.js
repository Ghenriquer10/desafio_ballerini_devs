
import { useState, useEffect } from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import * as C from './style'
import { ModalButton } from '../../components/Modal';


export default function Devs(){

    const [hasDev, setHasDev] = useState(true);
    const [devs, setDevs] = useState({});
    const [showModal, setShowModal] = useState(false);
    const devStorage = localStorage.getItem('devs')

    useEffect(() => {
            if(devStorage){
                setDevs(JSON.parse(devStorage))
                setHasDev(false)
            }
    }, [devStorage])

    function openModal(){
        setShowModal(prev => !prev);
    }

    return(
        <C.Container>
            {hasDev && <div>Não há devs cadastrados</div>}
            <ModalButton showModal={showModal} setShowModal={setShowModal} />
            <C.AddDev onClick={openModal}>Adiconar dev</C.AddDev>
            <C.CarousselContainer>
                <C.Item>
                    <C.Photo>
                        
                    </C.Photo>
                    <C.DevData>
                        <h1>
                            Gustavo Henrique Nogueira
                        </h1>
                        <p>
                            Dev Júnior
                        </p>
                    </C.DevData>
                    <C.SocialMedia>
                        <FaGithub/>
                        <FaLinkedin/>
                    </C.SocialMedia>
                    <button>Detalhes</button>
                </C.Item>
            </C.CarousselContainer>
        </C.Container>
    )
}