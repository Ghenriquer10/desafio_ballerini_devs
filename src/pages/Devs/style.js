import styled from "styled-components";
export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .aiButton{
        background-color: #27ae60;
        color: #fff;
        margin: 0 30px 100px 30px;
        border: none;
        border-radius: 3px;
    }
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
    cursor: pointer;
    
    &:hover{
        transition: all 1s;
        background-color: white;
        color: #27ae60;
    }
    `;

export const CarousselContainer = styled.div`
    width: 80vw;
    height: 60vh;
    margin-top: -100px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    justify-content: center;
    scroll-behavior: smooth; 
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Item = styled.div`
    width: 300px;
    height: 90%;
    display: flex;
    flex: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #363636;
    border-radius: 10px;
    margin: 0 30px;

    && button{
        background-color: green;
        border: none;
        color: white;
        width: 70%;
        padding: 9px;
        border-radius: 10px;
        cursor: pointer;
    }

    && button:hover{
        transition: all 1s;
        background-color: #FFF;
        color: green;
    }
`;

export const Photo = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
        img{
            width: 100%;
            border-radius: 50%;
        }
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
        cursor: pointer;
    }
`;

export const DevsButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-top: 5px;
    
    && button{
        color: black;
        font-weight: bold;
    }

    && .devEdit{
        background-color: #dbb801;
        margin-right: 3px;
    }
    
    && .devDelete{
        background: #f42626;
        margin-left: 3px;
    }
`;