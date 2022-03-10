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
    margin-left: 80px ;
    & .icon-fa{
        background-color: #1d1d1d;
        color: #27AE60;
        margin-right: 20px;
    }
    `;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 50%;

    p{
        font-size: 2.5em;
    }

    img{
        margin-right: 40px;
        margin-left: -30px;
    }
`;