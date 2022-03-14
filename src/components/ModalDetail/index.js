import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import * as C from "./style"

export const ModalDetails = ({modalDetails, setModalDetails}) => {

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
                                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                            </C.DetailContent>
                        </C.EditWrapper>
                    </animated.div>
                </C.DetailsBackground>
            ): null}
        </>
    )
};