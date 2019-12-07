import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: monospace;
        background: #222;
        color: white;
        text-shadow: -1px -2px 2px rgba(0,0,0,1);
        margin: 0;
        min-height: 100vh;
        padding: 0;
        border: 3px solid redd;
    }

`;

export { GlobalStyle };
