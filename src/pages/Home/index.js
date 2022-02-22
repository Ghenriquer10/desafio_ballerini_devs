import Modal from 'react-modal';
import { useState } from 'react';
import * as C from './style';
import { ModalButton } from '../../components/Modal';

Modal.setAppElement('#root');

export default function Home(){

    const [showModal, setShowModal] = useState(false);

    function openModal(){
        setShowModal(prev => !prev);
    }


    return(
        <C.Container>
            <ModalButton showModal={showModal} setShowModal={setShowModal} />
            <C.StartNow>
                <h1>O maior banco de devs do Brasil</h1>
                <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                <C.Button onClick={openModal}>Entre agora</C.Button>
            </C.StartNow>
        </C.Container>
    )
}