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
    border: 1px solid red;
`;

export const EditWrapper = styled.div`
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

export const DetailContent = styled.div`

`;