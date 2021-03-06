import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import * as C from "./style"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const ModalDetails = ({modalDetails, setModalDetails, devIndex, devs}) => {

    const detailRef = useRef();

    const animation = useSpring({
        config: {
          duration: 550
        },
        opacity: modalDetails ? 1 : 0,
        transform: modalDetails ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeDetailModal = e => {
        if (detailRef.current === e.target) {
          setModalDetails(false);
        }
      };

    return(
        <>
            {modalDetails ? (
                <C.DetailsBackground onClick={closeDetailModal} ref={detailRef}>
                    <animated.div style={animation}>
                        <C.EditWrapper modalDetails={modalDetails}>
                            <C.DetailContent>
                                <C.Item key={devs[devIndex].name}>
                                    <C.DivPhoto>
                                        <C.Photo>
                                            <img className='devPhoto' src={devs[devIndex].photo} alt="foto do dev"/>
                                        </C.Photo>
                                    </C.DivPhoto>
                                    <C.DevData>
                                        <p className='devName'>
                                           {devs[devIndex].name}
                                        </p>
                                        <p>{devs[devIndex].radioAreaOffice}</p>
                                        <p>{devs[devIndex].office}</p>
                                        <p>{devs[devIndex].devArea}</p>
                                    </C.DevData>
                                    <C.SocialMedia>
                                        <a href={devs[devIndex].linkGithub}>
                                            <FaGithub size={20}/>
                                        </a>
                                        <a href={devs[devIndex].linkLinkedin}>
                                            <FaLinkedin size={20}/>
                                        </a>
                                    </C.SocialMedia>
                                    <C.DevsButton>
                                        <button onClick={() => setModalDetails(prev => !prev)} className='devEdit'>Fechar</button>
                                    </C.DevsButton>
                                </C.Item>
                            </C.DetailContent>
                        </C.EditWrapper>
                    </animated.div>
                </C.DetailsBackground>
            ): null}
        </>
    )
};