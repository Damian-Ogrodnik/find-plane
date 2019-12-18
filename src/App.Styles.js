import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      font-size: 62.5%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
        font-family: monospace;
        color: white;
        text-shadow: -1px -2px 2px rgba(0,0,0,1);
        min-height: 100vh;
    }
    @media only screen and (max-width: 600px)  {
      *{
        font-size: 50%;
      }
    }
`;

const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export { GlobalStyle, App };
