import { createGlobalStyle } from 'styled-components';
import back from '../assets/bgclean.png'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root{
        height: 100%;
    }
    
    body{
        overflow-y: hidden;
        background-image: url(${back});
        font: 14px 'Overpass', sans-serif;
        color: #FFFFFF;
        -webkit-font-smoothing: antialiased !important;
        background-repeat: round;
    }

    ul{
        list-style: none;
    }

    a {
        text-decoration: none;
    }

`;