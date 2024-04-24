import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body{
        font-size: 1rem;
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.body};
        transition: all 0.7s ease;

        
/*         
        @media screen and (min-width: 1400px) {
            background-image: none;
        }

        @media screen and (max-width: 1150px) {
            background-position: 0px -50rem;
            background-attachment: fixed;
        }

        @media screen and (max-width: 950px) {
            background-position: 0 10rem;
            background-position: center top -0.1rem;
        }

        @media screen and (max-width: 500px) {
            background-image: none;
        } */
    }

    button{
        
    }

    a {
        color: ${props => props.theme.fontColor};
        text-decoration: none;
    }

    li{
        list-style-type: none;
    }

`;
