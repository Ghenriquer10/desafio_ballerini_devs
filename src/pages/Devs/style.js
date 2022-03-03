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