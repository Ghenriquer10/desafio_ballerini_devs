
import { useState } from 'react';
import * as C from './style'
import { ModalButton } from '../../components/Modal';


export default function Devs(){

    const [showModal, setShowModal] = useState(false);

    function openModal(){
        setShowModal(prev => !prev);
    }

    return(
        <C.Container>
            <ModalButton showModal={showModal} setShowModal={setShowModal} />
            Devs
            <button onClick={openModal}>
                Adiconar dev
            </button>
        </C.Container>
    )
}