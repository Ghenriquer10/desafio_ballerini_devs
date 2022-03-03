
import { useState, useEffect } from 'react';
import * as C from './style'
import { ModalButton } from '../../components/Modal';


export default function Devs(){

    const [hasDev, setHasDev] = useState(true);
    const [devs, setDevs] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const devStorage = localStorage.getItem('storageDevs')
        if(devStorage){
            setDevs(devStorage)
            setHasDev(false)
            console.log(devs)
        }
    }, [devs])

    function openModal(){
        setShowModal(prev => !prev);
    }

    return(
        <C.Container>
            {hasDev && <div>Não há devs cadastrados</div>}
            <ModalButton showModal={showModal} setShowModal={setShowModal} />
            <C.AddDev onClick={openModal}>Adiconar dev</C.AddDev>
        </C.Container>
    )
}