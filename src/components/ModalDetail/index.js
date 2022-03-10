import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import * as C from "./style"

export const ModalDetails = ({modalDetails, setModalDetails}) => {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 550
        },
        opacity: modalDetails ? 1 : 0,
        transform: modalDetails ? `translateY(0%)` : `translateY(-100%)` 
    });

    const closeDetailModal = e => {
        if (modalRef.current === e.target){
            setModalDetails(false)
        }
    }

    return(
        <>
            {!ModalDetails ? (
                <C.DetailsBackground onClick={closeDetailModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <C.EditWrapper modalDetails={modalDetails}>
                            <C.DetailContent>
                                <h1>Detalhes</h1>
                            </C.DetailContent>
                        </C.EditWrapper>
                    </animated.div>
                </C.DetailsBackground>

            ): null}
        </>
    )
}