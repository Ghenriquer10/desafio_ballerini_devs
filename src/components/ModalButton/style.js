import styled from "styled-components";
import { MdClose } from 'react-icons/md';
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 550px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #1F1C1B;
  border: 5px solid green;
  margin-top: -100px;

  h1{
    color: #27ae60;
    font-size: 2.0em;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  `;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  height: 100%;
  
  p{
    margin: 5px 0;
    color: white;
    margin-top: -10px;
  }
  
  form{
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  
  
  && input{
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    padding: 10px;
    border: none;
    margin-bottom: 10px;
    border-radius: 3px;
    text-align: center;
  }
  `;

export const ButtonCancel = styled.div`
  background-color: red;
  width: 30%;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  color: #27ae60;

  `;

export const DevType = styled.div`
  color: #FFF;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;

  && input[type = radio]{
  }

  && label{
    font-weight: bold;
  }
`;

export const AreaDev = styled.div`
  p{
    text-align: center;
    margin-top: 1px;
  }
  textarea{
    padding: 10px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 40px;

  && button {
      width: 30%;
      padding: 4px;
      color: #fff;
      border: none;
      background-color: #27ae06;
    }
  `;

  export const Loading = styled.div`
    color: white;
    margin-top: 30px;
    display: flex;
    align-items: center;
    color: green;
    font-size: 1.5em;

    @keyframes loadingSvg {
      from{
          transform: rotate(0deg);
          
      }

      to{
          transform: rotate(360deg);
      }
    }

    && svg{
      color: green;
      font-size: 1.3em;
      animation-name: loadingSvg;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      margin-left: 10px;
    }

  `;