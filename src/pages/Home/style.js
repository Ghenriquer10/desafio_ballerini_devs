import styled from "styled-components";

export const Container = styled.div`
    min-height: 600px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const StartNow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    margin-left: 100px;
    
    h1{
        color: #f9f9f9;
        max-width: 400px;
        margin-bottom: 20px;
        font-size: 2.5em;
        opacity: 0.5;
    }
    
    p{
        max-width: 400px;
        font-size: 1.5em;
        color: #a9a9a9;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
        color: #fff;
        background-color: #27ae06;
        padding: 10px 60px;
        border: none;
        border-radius: 20px;
        margin-right: 220px;
        margin-top: 60px;
        cursor: pointer;
    
    &:hover{
        transition: all 1s;
        background-color: #fff;
        color:#27ae06;
    }
`;