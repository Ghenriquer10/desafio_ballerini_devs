import styled from 'styled-components';

export const DetailsBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const EditWrapper = styled.div`
    height: 500px;
    width: 400px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    z-index: 10;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #1F1C1B;
    border: 5px solid green;
    margin-top: -100px;

`;

export const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.8;
    color: #fff;
    height: 100%;
    width: 100%;
    `;

export const Item = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    display: flex;
    && label{
        display: flex;
        justify-content: center;
    }
    && input{
        width: 300px;
        padding: 7px;
        border: none;
        margin-top: 3px;
        text-align: center;
    }

    `;
export const DevData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #C0C0C0;
`;
export const SocialMedia = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    margin-top: 10px;

    a{
        color: green;
    }

`;

export const EditDevType = styled.div`
  color: #FFF;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  && input[type = radio]{
      width: 30px;
  }

  && label{
    font-weight: bold;

  }
`;

export const DevsButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
    button{
        padding: 5px;
        width: 30%;
        background-color: green;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        color: #FFF;
    }

    button:hover{
        transition: all 1s;
        background-color: #00FF7F;
        color: #FFF;
    }
`;