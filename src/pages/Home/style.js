import styled from "styled-components";

export const Container = styled.div`
    min-height: 600px;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StartNow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 50px;

    h1{
        color: #f9f9f9;
        max-width: 400px;
        margin-bottom: 20px;
        font-size: 2.5em;
    }

    p{
        max-width: 400px;
        font-size: 1.5em;
        color: #a9a9a9;
    }
`;