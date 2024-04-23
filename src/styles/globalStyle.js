import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.js';

export const GlobalStyles = createGlobalStyle`
    html, body{
        color: ${theme.textColor};
        font-size:1rem;
        background-color:#202124;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: ${theme.textColor};
        text-decoration: none;
    }

    li{
        list-style-type: none;
    }
`;
