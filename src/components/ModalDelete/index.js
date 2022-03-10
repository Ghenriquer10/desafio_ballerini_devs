import React, {useRef} from 'react'; 
import * as C from './style';
import {useSpring, animated} from 'react-spring';

export const ModalDelete = ({showModalDelete, setShowModalDelete, devIndex, devs}) => {
    const modalDeleteRef = useRef();

    const animation = useSpring({
        config: {
          duration: 550
        },
        opacity: showModalDelete ? 1 : 0,
        transform: showModalDelete ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeDeleteModal = e => {
          if (modalDeleteRef.current === e.target){
              setShowModalDelete(false);
          }
      };

      function handleDelete(){
        devs.splice(devIndex)
        localStorage.setItem('devs', JSON.stringify(devs));
        window.location.reload();
      }

      return(
          <>
            {showModalDelete ? (
                <C.BackgroundDelete onClick={closeDeleteModal} ref={modalDeleteRef}>
                    <animated.div style={animation}>
                        <C.DeleteWrapper showModalDelete={showModalDelete}>
                            <C.DeleteContent>
                                <h1>Deletar desenvolvedor</h1>
                                <p>Tem certeza que deseja excluír este desenvolvedor?</p>
                                <C.ButtonDelete>
                                    <button className='cancel' onClick={() => setShowModalDelete(prev => !prev)}>Cancelar</button>
                                    <button className='delete' onClick={handleDelete}>Excluir</button>
                                </C.ButtonDelete>
                            </C.DeleteContent>
                        </C.DeleteWrapper>
                    </animated.div> 
                </C.BackgroundDelete>
            ) : null}
          </>
      )
}