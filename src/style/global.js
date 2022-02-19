import { createGlobalStyle } from 'styled-components';
import back from '../assets/backg.png'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Maven+Pro&family=Overpass&display=swap');

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