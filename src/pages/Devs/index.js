
import { useState, useEffect, useRef } from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import * as C from './style'
import { ModalButton } from '../../components/Modal';


export default function Devs(){

    const [hasDev, setHasDev] = useState(true);
    const [devs, setDevs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const devStorage = localStorage.getItem('devs')
    const carousel = useRef(null);

    useEffect(() => {
            if(devStorage){
                setDevs(JSON.parse(devStorage))
                setHasDev(false)
            }
    }, [devStorage])

    function openModal(){
        setShowModal(prev => !prev);
    }

    function handleLeft(e){
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    function handleRigth(e){
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    function handleDevDetails(e){
        e.preventDefault();
    }
       
    function handleDelete(index){
        devs.splice(index)
        localStorage.setItem('devs', JSON.stringify(devs));
        window.location.reload();

    }

    return(
        <C.Container>
            {hasDev && <div>Não há devs cadastrados</div>}
            <ModalButton showModal={showModal} setShowModal={setShowModal} />
            <C.AddDev onClick={openModal}>Adiconar dev</C.AddDev>
            {!hasDev &&
            <>
                <button onClick={handleLeft} className='aiButton'><AiOutlineLeft size={50}/></button>
                <C.CarousselContainer ref={carousel}>
                    {devs.map((dev, index) => {
                        return(
                            <C.Item key={dev.name}>
                                <C.Photo>
                                    <img src={dev.photo} alt="foto do dev"/>
                                </C.Photo>
                                <C.DevData>
                                    <h1>
                                        {dev.name}
                                        {index}
                                    </h1>
                                    <p>
                                        {dev.office}
                                    </p>
                                </C.DevData>
                                <C.SocialMedia>
                                    <a href={dev.linkGithub}>
                                        <FaGithub />
                                    </a>
                                    <a href={dev.linkLinkedin}>
                                        <FaLinkedin/>
                                    </a>
                                </C.SocialMedia>
                                <button onClick={handleDevDetails}>Detalhes</button>
                                <C.DevsButton>
                                    <button className='devEdit'>Editar Dev</button>
                                    <button onClick={() => handleDelete(index)} className='devDelete'>Deletar Dev</button>
                                </C.DevsButton>
                            </C.Item>
                        )
                    })}
                    </C.CarousselContainer>
                    <button onClick={handleRigth} className='aiButton'><AiOutlineRight size={50}/></button>
                </>
            }
            </C.Container>
    )
}