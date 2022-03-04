import styled from "styled-components";
export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AddDev = styled.div`
    position: absolute;
    top: 100px;
    right: 100px;
    padding: 7px;
    border-radius: 20px;
    min-width: 150px;
    background-color: #27ae60;
    color: #fff;
    text-align: center;

    &:hover{
        transition: all 1s;
        background-color: white;
        color: #27ae60;
    }
`;

export const CarousselContainer = styled.div`
    width: 80vw;
    height: 60vh;
    border: 1px solid red;
    margin-top: -100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Item = styled.div`
    border: 1px solid red;
    width: 300px;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & button{
        background-color: green;
        border: none;
        color: white;
        width: 70%;
        padding: 9px;
        border-radius: 10px;
        cursor: pointer;
    }

    & button:hover{
        transition: all 1s;
        background-color: #FFF;
        color: green;
    }
`;

export const Photo = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid red;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const DevData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        text-align: center;
        margin-bottom: 10px;
    }
`;

export const SocialMedia = styled.div`
    margin-bottom: 20px;
    margin-top: 20px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    & svg{
        color: #27ae60;
    }

`;