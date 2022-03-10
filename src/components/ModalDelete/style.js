import styled from 'styled-components';

export const BackgroundDelete = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const DeleteWrapper = styled.div`
    border: 1px solid red;
    height: 300px;
    width: 500px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const DeleteContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
    h1{
        background-color: green;
        width: 101%;
        text-align: center;
        color: black;
        margin-bottom: 60px;
    }
    
    p{
        color: #fff;
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 60px;
    }
`;

export const ButtonDelete = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    && button{
        color: #FFF;
        border: none;
        width: 100px;
        height: 40px;
        border-radius: 7px;
        font-weight: bold;
        color: #000;
        cursor: pointer;
    }

    .cancel{
        background-color: yellow;
    }

    .delete{
        background-color: red;
    }
`;