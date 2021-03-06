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
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const DivPhoto = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-radius: 10px;
`;
export const Photo = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 90px;
    border: 1px solid green;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;
export const DevData = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: green;

    && .devName{
        color: white;
        font-size: 2em;
    }

    p{
        color: grey;
    }
`;
export const SocialMedia = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    a{
      color: green;
    }
`;
export const DevsButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    button{
        padding: 6px;
        width: 50%;
        background-color: green;
        border: none;
        cursor: pointer;
        border-radius: 9px;
        color: #fff;
    }
    button:hover{
        transition: 1s all;
        background-color: white;
        color: green;
    }
`;