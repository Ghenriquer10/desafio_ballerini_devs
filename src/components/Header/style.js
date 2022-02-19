import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 30px;
`;

export const Social = styled.div`
    display: flex;
    align-items: center;
    min-width: 40%;
    justify-content: space-around;
    
    & .icon-fa{
        background-color: #1d1d1d;
        color: #27AE60;
    }
    `;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 50%;

    img{
        margin-right: 10px;
    }
`;