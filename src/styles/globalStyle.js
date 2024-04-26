import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body{
        font-size: 1rem;
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.body};
        transition: all 0.7s ease;
        min-width:14rem;

        ::-webkit-scrollbar {
            width: 0.444rem;
            background-color: rgba(206, 212, 218, 0.4);
        }

        ::-webkit-scrollbar-thumb {
            background: #7E49D9;
            border-radius: 1rem;
        }
    }

    a {
        color: ${(props) => props.theme.fontColor};
        text-decoration: none;
    }

    li{
        list-style-type: none;
    }

`;
